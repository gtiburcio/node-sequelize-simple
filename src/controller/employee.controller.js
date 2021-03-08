const route = require('express').Router();

const db = require('../config/database');

route.get('/', async (_, res) => {
  const employees = await db.employees.findAll();
  res.send(employees);
});

route.get('/:id', async (req, res) => {
  const { id } = req.params;
  const employee = await db.employees.findByPk(id);
  if (!employee) return res.status(404).send();
  res.send(employee);
});

route.post('/', (req, res) => {
  db.employees.create(req.body);
  res.status(201).send();
});

route.put('/:id', (req, res) => {
  const { id } = req.params;
  db.employees.update(req.body, { where: { id } });
  res.status(204).send();
});

route.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.employees.destroy({
    where: {
      id,
    },
  });
  res.status(204).send();
});

module.exports = route;
