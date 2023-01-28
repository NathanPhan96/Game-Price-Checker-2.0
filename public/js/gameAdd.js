// Frontend JS for login page, this is loaded via the script tag in the login.handlebars file
const gameAdd = async function (event) {
  event.preventDefault();

  const gamenameEl = document.querySelector("#game-name-input");
  const gamepriceEl = document.querySelector("#game-price-input");
  const gameplatformEl = document.querySelector("#game-platform-input");
  const gameurlEl = document.querySelector("#game-url-input");
  const { Game } = require("../../models");

  const gameid = Game.id;
  const userid = req.session.user_id;

  const response = await fetch("/api/gameData/", {
    method: "POST",
    body: JSON.stringify({
      id: gameid.value,
      name: gamenameEl.value,
      price: gamepriceEl.value,
      platform: gameplatformEl.value,
      url: gameurlEl.value,
      user_id: userid.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    console.log("Game Added");
  } else {
    alert("Failed to add game");
  }
};

document.querySelector("#game-add-form").addEventListener("submit", gameAdd);
