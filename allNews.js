let newsLink = document.getElementById("showAll-news"),
  newsBox = document.getElementById("news-box");
newsLink.onclick = function(){
    newsBox.classList.add("open");
}