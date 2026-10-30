import db from "#db/client";
import { faker } from "@faker-js/faker";
import { createPlaylist } from "#db/queries/playlists";
import { createPlaylistTrack } from "#db/queries/playlists_tracks";
import { createTrack } from "#db/queries/tracks";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  for (let i = 1; i <= 20; i++) {
    await createTrack(
      "Track " + i + " - " + faker.music.songName(),
      faker.number.int({ min: 30000, max: 50000 }),
    );
  }

  for (let i = 1; i <= 10; i++) {
    await createPlaylist(
      "Playlist " + i + " - " + faker.music.genre(),
      faker.music.genre() + " music",
    );

    for (let j = 1; j <= 20; j++) {
      // const playlistId = 1 + Math.floor(i / 2);
      await createPlaylistTrack(i, j);
    }
  }
}
