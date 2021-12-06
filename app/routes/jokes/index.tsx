import { Joke } from "@prisma/client";
import type { LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { db } from "~/utils/db.server";

type LoaderData = { randomJoke: Joke };

export let loader: LoaderFunction = async () => {
  let count = await db.joke.count();
  let randomRowNumber = Math.floor(Math.random() * count);
  let [randomJoke] = await db.joke.findMany({
    take: 1,
    skip: randomRowNumber,
  });
  let data: LoaderData = { randomJoke };
  return data;
};

export default function JokesIndexRoute() {
  let data = useLoaderData<LoaderData>();
  return (
    <div>
      <p>Here's a random joke:</p>
      <p>{data.randomJoke.content}</p>
    </div>
  );
}
