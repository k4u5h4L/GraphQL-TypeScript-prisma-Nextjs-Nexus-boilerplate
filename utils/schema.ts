import { makeSchema, queryType, objectType } from "@nexus/schema";
import prisma from "prisma/client";

const Movie = objectType({
  name: "Movie",
  definition(t) {
    t.string("name");
    t.string("desc");
    t.string("date");
  },
});

// const Query = queryType({
//   definition(t) {
//     t.string("movies", () => prisma.movie.findMany());
//   },
// });

const Query = queryType({
  definition(t) {
    t.list.field("allMovies", {
      type: "Movie",
      resolve: () => prisma.movie.findMany(),
    });
  },
});

export const schema = makeSchema({
  types: [Query, Movie],
});
