import express from "express";
const app = express();
export default app;

import morgan from "morgan";

app.use(express.json());

app.use(morgan("dev"));

app.use("/playlistsTracks", playlistsTracksRouter);
app.use("/tracks", trakcsRouter);
app.use("/playlists", playlistsRouter);

app.use((err, req, res, next) => {
  switch (err.code) {
    case "22P02": // invalid input syntax
      return res.status(400).send(err.message);

    case "23505": // unique constraint
    case "23503": // foreign key violation
      return res.status(400).send(err.detail);

    default:
      next(err);
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong.");
});
