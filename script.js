//fucntion that checks the price of the game
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://game-prices.p.rapidapi.com/regions",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "c8ec64fff9msh3129d458e305ddcp19d74ajsnf033030165c6",
		"X-RapidAPI-Host": "game-prices.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});