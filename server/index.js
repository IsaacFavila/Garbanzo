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
app.get('/genreFavorites', (req, res) => {
  pool.query(`select * from shows where genre != 'Anime' and favorite = true order by genre ASC`)
    .then(({rows}) => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(500).send(err);
    })
})
app.get('/subgenreFavorites', (req, res) => {
  pool.query(`select * from shows where genre = 'Anime' and favorite = true order by subgenre ASC`)
    .then(({rows}) => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(500).send(err);
    })
})
app.get('/genres', (req, res) => {
  pool.query(`select distinct genre from shows where genre != 'Anime' order by genre ASC`)
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
      res.status(200).send(rows);
    })
    .catch(err => {
      res.status(500).send(err);
    })
})
app.get('/random', (req, res) => {
  var random = Math.floor(Math.random() * (25 - 1 + 1) + 1);
  pool.query(`select * from shows where id = ${random}`)
    .then(({rows}) => {
      res.status(200).send(rows);
    })
    .catch(err => {
      res.status(500).send(err);
    })
})

app.get('/suggestions', (req, res) => {
  var platform = req.query.platform;
  var genre = req.query.genre;
  var subgenre = req.query.subgenre || null;
  var length = req.query.length || null;

  console.log(req.query);
  var queryStr =  `select * from shows where platform = '${platform}' and genre = '${genre}' limit 3`;

  if (length && !subgenre) {
    queryStr = `select * from shows where platform = '${platform}' and genre = '${genre}' and length = '${length}'`;
  }
  if (length && subgenre ) {
    queryStr = `select * from shows where platform = '${platform}' and subgenre = '${subgenre}' and length = '${length}'`;
  }
  if (subgenre && !length) {
    queryStr = `select * from shows where platform = '${platform}' and subgenre = '${subgenre}'`;
  }

  pool.query(queryStr)
    .then(({rows}) => {
      res.status(200).send(rows);
    })
    .catch(err => {
      res.status(500).send(err);
    })
})

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
