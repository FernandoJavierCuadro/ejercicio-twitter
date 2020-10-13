const {
  renderHome,
  renderArticle,
  addComment,
  deleteComment,
} = require("../controllers/controller");

function routes(app) {
    
  app.get("/", (req, res) => {
    res.redirect("home");
  });

  app.get("/home", renderHome);

  app.get("/home/articles/:title", (req, res) => {
    renderArticle(req, res);
  });

  app.post("/home/comments", (req, res) => {
    addComment(req, res);
  });

  app.get("/home/comments/:id", (req, res) => {
    deleteComment(req, res);
  });
}

module.exports = routes;
