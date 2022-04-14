const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length-1);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortune = ["A faithful friend is a strong defense.",
              "A fresh start will put you on your way.",
              "A friend asks only for your time not your money.",
          ];
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune [randomIndex];

  res.status(200).send(randomFortune);

})

app.get("/api/feeling", (req, res) => {
  const feeling = ["Great but hungry",
              "Sad and scared",
              "LETSGOOOO",
          ];
  let randomIndex = Math.floor(Math.random() * feeling.length);
  let randomFeeling = feeling [randomIndex];

  res.status(200).send(randomFeeling);

})


app.get("/api/question", (req, res) => {
  const question = ["How are you today?",
              "Can we go out?",
              "Are you hungry",
          ];
  let randomIndex = Math.floor(Math.random() * question.length);
  let randomQuestion = question [randomIndex];

  res.status(200).send(randomQuestion);
})
app.listen(4000, () => console.log("Server running on 4000"));
