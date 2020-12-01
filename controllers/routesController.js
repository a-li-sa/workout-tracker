const path = require("path");

module.exports = {
  htmlCss: (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "style.css"));
  },
  htmlIndex: (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
  },
  htmlStats: (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "stats.html"));
  },
  htmlExercise: (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "exercise.html"));
  }
}
