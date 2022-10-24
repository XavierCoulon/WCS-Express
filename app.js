const express = require("express");

const app = express();
const port = 5001;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 110,
  },
  {
    id: 4,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
  {
    id: 5,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
  {
    id: 6,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 120,
  },
  {
    id: 7,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 100,
  },
  {
    id: 8,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

app.get("/movies", (req, res) => {
  const limit = req.query.limit;
  const duration = req.query.duration;

//   if (limit && duration) res.status(200).json(movies.slice(0, limit).filter(movie => movie.duration === duration));
  if (limit) res.status(200).json(movies.slice(0, limit));
  if (duration) res.status(200).json(movies.filter((movie) => movie.duration == duration));

  return res.status(200).json(movies.slice(0, 10));
});

app.get("/movies/:id", (req, res) => {
  const movie = movies.find((movie) => movie.id == req.params.id);
  movie
    ? res.status(200).json(movie)
    : res.status(404).send("Oupsss, not found...");
});

app.listen(port, (err) => {
  if (err) {
    console.error("Something wrong happened...");
  } else {
    console.log(`Server is listening on port ${port}`);
  }
});
