var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "63546e2d55b14e45ad47d7ccdebda514"
});

$.ajax({
 url: url,
 method: 'GET',
}).done(function(result) {
var items=10;
	for(var i= 0; i< items; i++){
			var title= result.results[i].title;
			var photourl = '<img src=" '+ result.results[i].multimedia[4].url +'  "/>';
			var abstract = '<p >'+result.results[i].abstract +'</p>';
			var articlelink = result.results[i].url;
			if(result.results[i].multimedia.length >0){
					$(".images").append( ( "<a href='" + articlelink +"'>"+ photourl+ abstract +"</a>"));
				}
				else {}
		} 
}).fail(function(err) {
  throw err;
});




var select = document.getElementById("selectMenu");
var options = ["Home", "Opinion", "World", "National", "Politics", "Upshot", "NY Region", "Business", "Technology", "Science", "Health", "Sports", "Arts", "Books", "Movies", "Theater", "Sunday Review", "Fashion", "T Magazine", "Food", "Travel", "Magazine", "Real Estate", "Automobiles", "Obituaries", "Insider"];
var articles = document.getElementById("title");
        for(var i = 0; i < options.length; i++) {
            var opt = options[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            select.appendChild(el);
            
        }
