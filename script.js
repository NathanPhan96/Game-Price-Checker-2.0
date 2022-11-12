const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c8ec64fff9msh3129d458e305ddcp19d74ajsnf033030165c6",
    "X-RapidAPI-Host": "game-prices.p.rapidapi.com",
  },
};

var submitButtonEl = $("#submit");
var region = $("#region");
var game_name = $("#game_name");

submitButtonEl.on("click", function () {
  clearData();
  var regionVal = region.find(":selected").val();
  var gameVal = game_name.val();
  console.log(regionVal, gameVal);
  if (!regionVal || !gameVal) return;

  $(this).addClass("loading");
  $("li").css("color", "white");
  return fetch(
    `https://game-prices.p.rapidapi.com/games?title=${gameVal}&region=${regionVal}&offset=0&limit=10`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      var games = response.games.filter((g) => g.name);
      //loop through the data and append to the UL
      for (var i = 0; i < games.length; i++) {
        var gameData = games[i];
        var stores = games[i].stores[i];
        $("ul")
          .append(`<li class="nes-container list-unstyled flex-grow-1 is-rounded bg-light">
            <p class="title">${gameData.name}</p>
            <p>Release date--${gameData.releaseDate || "Unknown"}</p>
            <p>Price - ${gameData.currentLowestPrice} ${gameData.currency}</p>
            <p>Online Stores - <a href="${stores.url}">LINK</a></p>
            <i class="nes-icon coin is-large" id="coin"></i>
          </li>`);
      }
    })
    .catch((err) => console.error(err))
    .finally(() => {
      $(this).removeClass("loading");
    });
});

//function to clear json data
function clearData() {
  $("ul").empty();
}

$(function () {
  $("#game_name").autocomplete({
    source: gameNames,
  });
});
