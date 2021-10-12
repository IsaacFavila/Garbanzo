const express = require('express');
const morgan = require('morgan');

let app = express();
let port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/../public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'isaacmfavila',
  password: '',
  database: 'shows',
  host: 'localhost',
  port: 5432
});
pool.connect(err => {
  if (err) {
  console.error('connection error', err.stack);
  } else {
    console.log('connected to database');
  }
});

app.get('/credentials', (req, res) => {
  pool.query('select * from credentials')
    .then(({rows}) => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(500).send(err);
    })
})
app.get('/favorites', (req, res) => {
  pool.query('select * from shows where favorite = true order by genre ASC, subgenre, name ASC')
    .then(({rows}) => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(500).send(err);
    })
})
app.get('/genres', (req, res) => {
  pool.query('select distinct genre from shows order by genre ASC')
    .then(({rows}) => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(500).send(err);
    })
})
app.get('/subgenres', (req, res) => {
  pool.query('select distinct subgenre from shows where subgenre is not null order by subgenre ASC')
    .then(({rows}) => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(500).send(err);
    })
})
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
