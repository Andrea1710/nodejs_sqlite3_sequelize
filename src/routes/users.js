module.exports = app => {
  const Users = app.db.models.Users;

  app.get("/users/:id", (req, res) => {
    Users.findByPk(req.params.id, {
      attributes: ["id", "name", "email"]
    })
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.status(412).json({ message: err.message });
      });
  });

  app.get("/users", (req, res) => {
    Users.findAll()
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.status(412).json({ message: err.message });
      });
  });

  app.post("/users", (req, res) => {
    Users.create(req.body)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.status(412).json({ message: err.message });
      });
  });

  app.delete("/users/:id", (req, res) => {
    Users.destroy({ where: { id: req.params } })
      .then(result => {
        res.sendStatus(204);
      })
      .catch(err => {
        res.status(412).json({ message: err.message });
      });
  });
};
