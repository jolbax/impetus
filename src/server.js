const app = require("./app");
const http = require("http");

const port = 3080;

app.set("port", port);
app.set("tittle", "Impetus platform");

const server = http.createServer(app);
server.listen(process.env.PORT || port);

server.on("listening", () => {
  console.log(`server listening on port ${server.address().port}`);

});