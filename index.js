const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("items.json");
const port = 80;

server.use(router);
server.listen(port);