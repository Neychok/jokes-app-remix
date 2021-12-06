import { PrismaClient } from "@prisma/client";
let db = new PrismaClient();

async function seed() {
  await Promise.all(
    getJokes().map((joke) => {
      return db.joke.create({ data: joke });
    })
  );
}

seed();

function getJokes() {
  // shout-out to https://icanhazdadjoke.com/

  return [
    {
      name: "Blue screen",
      content: `What's the difference between Paul Walker and a computer? I give a fuck when my computer crashes.`,
    },
    {
      name: "Toasted",
      content: `Jesus Christ fed 2,000 people with 5 loaves of bread and 2 fish, but Adolf Hitler made 6 million Jews toast.`,
    },
    {
      name: "Japanese girls",
      content: `What's the worst thing about breaking up with a Japanese girl? You have to drop the bomb twice before she gets the message.`,
    },
    {
      name: "Dishwasher",
      content: `How can you tell if your wife is dead? The sex is the same but the dishes start piling up.`,
    },
    {
      name: "Trick or treat",
      content: `What is a pedophiles favorite part about Halloween? Free delivery.`,
    },
    {
      name: "Ameno",
      content: `How do you get a nun pregnant? Dress her up like an altarboy.`,
    },
    {
      name: "You are a wizard Harry.",
      content: `What's the difference between a Jew and harry potter? Harry can escape the chamber.`,
    },
    {
      name: "7 8 9",
      content: `Did you hear the Score of the Egypt vs Ethiopia soccer game? Egypt 8, Ethiopia didn't.`,
    },
    {
      name: "Busted",
      content: `Girls are like blackjack… I'm trying to go for 21 but I always hit on 14.`,
    },
  ];
}
