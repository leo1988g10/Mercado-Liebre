const express = require("express")
const app = express();
const path = require("path");
const port = process.env.PORT || 3003;

app.use(express.static("public"));
app.get("/", (req, res) => res.sendFile(path.resolve("./views/home.html")));
app.get("/registro", (req, res) => res.sendFile(path.resolve("./views/registro.html")));
app.get("/login", (req, res) => res.sendFile(path.resolve("./views/login.html")));
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));