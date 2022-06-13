const jsonServer = require("json-server");
const server = jsonServer.create();
const router= jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get("/geterror", (req, res) => {
    res.status(500).json({error : "500에러야!"})
})

server.use((req, res, next) => {
    next();
})

server.use(router); 
server.listen(5001, () => {
    console.log("server is running");
});