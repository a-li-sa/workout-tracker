const path = require("path");

module.exports = {
  htmlIndex: (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
  },
  htmlStats: (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "stats.html"));
  },
  htmlExercise: (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "exercise.html"));
  },
}
