import bpy
import threading
import json
from http.server import BaseHTTPRequestHandler, HTTPServer

SECRET = "temrush2026"


class Handler(BaseHTTPRequestHandler):
    def do_POST(self):
        length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(length)
        data = json.loads(body)
        if data.get('secret') != SECRET:
            self.send_response(403)
            self.end_headers()
            return
        code = data.get('code', '')
        exec(code, {'bpy': bpy})
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.end_headers()
        self.wfile.write(b'{"status":"ok"}')

    def log_message(self, *args):
        pass


def start():
    HTTPServer(('localhost', 5000), Handler).serve_forever()


threading.Thread(target=start, daemon=True).start()
print("Blender server running on port 5000")
