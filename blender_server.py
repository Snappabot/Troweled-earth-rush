import bpy
import threading
import json
import queue
from http.server import BaseHTTPRequestHandler, HTTPServer

SECRET = "temrush2026"
task_queue = queue.Queue()
result_store = {}

class Handler(BaseHTTPRequestHandler):
    def do_POST(self):
        length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(length)
        data = json.loads(body)
        if data.get('secret') != SECRET:
            self.send_response(403)
            self.end_headers()
            return
        import uuid
        task_id = str(uuid.uuid4())
        task_queue.put((task_id, data.get('code', '')))
        # Wait for result (up to 30s)
        for _ in range(300):
            if task_id in result_store:
                break
            import time
            time.sleep(0.1)
        result = result_store.pop(task_id, {"status": "timeout"})
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(result).encode())

    def log_message(self, *args):
        pass

def process_queue():
    if not task_queue.empty():
        task_id, code = task_queue.get()
        try:
            exec(code, {'bpy': bpy})
            result_store[task_id] = {"status": "ok"}
        except Exception as e:
            result_store[task_id] = {"status": "error", "error": str(e)}
    return 0.1

def start():
    HTTPServer(('localhost', 5000), Handler).serve_forever()

threading.Thread(target=start, daemon=True).start()
bpy.app.timers.register(process_queue, persistent=True)
print("Blender server v2 running on port 5000")
