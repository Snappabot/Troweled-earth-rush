import bpy
import threading
import json
import queue
from http.server import BaseHTTPRequestHandler, HTTPServer

SECRET = "temrush2026"
task_queue = queue.Queue()

class Handler(BaseHTTPRequestHandler):
    def do_POST(self):
        length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(length)
        data = json.loads(body)
        if data.get('secret') != SECRET:
            self.send_response(403)
            self.end_headers()
            return
        task_queue.put(data.get('code', ''))
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(b'{"status":"queued"}')

    def log_message(self, *args):
        pass

def process_queue():
    if not task_queue.empty():
        code = task_queue.get()
        try:
            exec(code, {'bpy': bpy})
        except Exception as e:
            print("Script error:", e)
    return 0.1

def start():
    HTTPServer(('localhost', 5000), Handler).serve_forever()

threading.Thread(target=start, daemon=True).start()
bpy.app.timers.register(process_queue, persistent=True)
print("Blender server v3 running on port 5000")
