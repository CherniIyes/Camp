const express = require('express');
const cors = require('cors');
const db = require("./MySql/index");

const port = 4000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/gettool', (req, res) => {
  db.getAllTools(function(error, results) {
    if (error) {
      res.status(500).send(error);
    } else {
      res.json(results);
    }
  });
});

app.post('/api/addtool', (req, res) => {
  const newUser = req.body;

  db.addTool(newUser, function(error, results) {
    if (error) {
      console.error('Error adding Tool:', error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    } else {
      res.json(results);
    }
  });
});

app.delete('/api/deletetool/:id', (req, res) => {
  const id = req.params.id;

  db.DeleteTool(id, function(error, results) {
    if (error) {
      console.error('Error deleting Tool:', error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    } else {
      res.json(results);
    }
  });
});

app.get('/api/getOneTool/:id', (req, res) => {
  const id = req.params.id;

  db.getOneTool(id, function(error, results) {
    if (error) {
      console.error('Error getting product:', error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    } else {
      res.json(results);
    }
  });
});

app.put('/api/updatetool/:id', (req, res) => {
  const id = req.params.id;

  // Assuming you have some update logic here, for example:
  const updatedData = req.body;

  db.update(id, updatedData, function(error, results) {
    if (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
