


let submitButtonEl = $("#submit");

//function to get game data
submitButtonEl.on("click", function () {
  
  var userGameName = $("#game_name").val();
  // Need to do this inside the controller and then use fetch to get the data
  fetch("/api/game/gameData")
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        userGameName == data.name;
      }
      then(console.log(data));
    })
    .catch((err) => console.log(err));

  console.log(data);
});
// from the route
// dataReturn: {
// [gameData.name.contains];
// [userGameName];
// }
// console.log(dataReturn);

//function to clear json data
function clearData() {
  $("ul").empty();
}

$(function () {
  $("#game_name").autocomplete({
    // source: gameNames,
  });
});
