
$("#selectMenu").on("change", function(){

	$('#title').empty();
	var val= $("#selectMenu option:selected").val()
	var url = "https://api.nytimes.com/svc/topstories/v2/" + val +".json";
url += '?' + $.param({
  'api-key': "63546e2d55b14e45ad47d7ccdebda514"
});

$.ajax({
 url: url,
 method: 'GET',
}).done(function(result) {

var count=1;
	for(var i= 0; i< result.results.length; i++){
			
			if(count<=12){
			if(result.results[i].multimedia.length >0){
			var title= result.results[i].title;
			var photourl = '<img src=" '+ result.results[i].multimedia[4].url +'  "/>';
			var abstract = '<p  class="abstract">'+result.results[i].abstract +'</p>';
			var articlelink = result.results[i].url;

					$(".images").append(( '<div class="article-mobile">' + photourl + '<a href="' + articlelink +'">' + abstract +'</a></div>'));
					$(count++);
					$('.header').removeClass('header').addClass('minified');
				}}

				else {
					//stop looping
					break;
				}
		 }
}).fail(function(err) {
  throw err;
});

});


