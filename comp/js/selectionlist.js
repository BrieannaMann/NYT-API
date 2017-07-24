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
