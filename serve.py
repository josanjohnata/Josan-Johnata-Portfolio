"""Serve the portfolio locally with the same language URLs used in production."""

import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit, urlunsplit


class PortfolioHandler(SimpleHTTPRequestHandler):
    def send_head(self):
        url = urlsplit(self.path)
        redirects = {
            '/pt.html': '/pt',
            '/index.html': '/en',
            '/index': '/en',
            '/pt/': '/pt',
            '/en/': '/en',
        }
        if url.path in redirects:
            self.send_response(308)
            self.send_header('Location', urlunsplit(('', '', redirects[url.path], url.query, '')))
            self.send_header('Content-Length', '0')
            self.end_headers()
            return None
        return super().send_head()

    def translate_path(self, path):
        url = urlsplit(path)
        aliases = {'/pt': '/pt.html', '/en': '/index.html'}
        return super().translate_path(aliases.get(url.path, url.path))


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=8000)
    args = parser.parse_args()
    handler = partial(PortfolioHandler, directory=str(Path(__file__).resolve().parent))
    with ThreadingHTTPServer(('127.0.0.1', args.port), handler) as server:
        print(f'Portfolio: http://localhost:{args.port}/pt | http://localhost:{args.port}/en', flush=True)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass
