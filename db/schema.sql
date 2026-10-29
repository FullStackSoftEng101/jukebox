-- TODO
CREATE TABLE playlists(
    id serial PRIMARY KEY,
    name text NOT NULL,
    description text NOT NULL
);

CREATE TABLE tracks(
    id serial PRIMARY KEY,
    name text NOT NULL,
    duration_ms int NOT NULL
);
CREATE TABLE playlists_tracks(
    id serial PRIMARY KEY,
    playlist_id int NOT NULL REFERENCES playlsts(id) ON DELETE CASCADE,
    track_id int NOT NULL REFERENCES  tracks(id) ON DELETE CASCADE,
    UNIQUE (playlist_id, track_id)
);