const colors = require("colors");

const loggers = (req, res, next) => {
  const getcolors = {
    GET: "green",
    PUT: "blue",
    DELETE: "red",
    POST: "yellow",
  };

  const color = getcolors[req.method] || "white";

  console.log(
    colors[color](`${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`)
  );

  next();
};

module.exports = loggers;
