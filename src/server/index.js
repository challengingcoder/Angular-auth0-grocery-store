const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
const _ = require("lodash");
const http = require("http");
// Enable CORS
const path = require("path");
app.use(cors());

// Enable the use of request body parsing middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
const api = require("./api");
// Set our api routes
app.use("/api", api);

// Catch all other routes and return the index file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../dist/index.html"));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || "3000";
app.set("port", port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
