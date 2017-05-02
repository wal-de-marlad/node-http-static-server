# Node HTTP server for static files
Feel free to criticize this code.

## Usage
1. git clone https://github.com/wal-de-marlad/node-http-static-server.git
2. cd first-node-http-server
3. npm install
4. npm start

## Defaults
Server will run on host 127.0.0.1, port 8080, will serve files from directory named *public* and will look for *index.html* file. You can change this before *npm start*. For example:

npm config set server:host 52.168.92.11

npm config set server:port 80

npm config set server:public "public_html"

npm config set server:index "index.htm"
