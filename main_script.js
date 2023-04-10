function changeIcon(x) {
  x.classList.toggle("change");

  x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
const theNews = [
  {
    title: "The Downsides of AI Artistry",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
    newsId: 1,
  },
  {
    title: "Hydrogen VS Electric Cars",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
    newsId: 2,
  },
  {
    title: "Is VC Funding Drying Up?",
    description: 
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    newsId: 3,
  }
];
{/* <div>
          <h4><a href="#">Hydrogen VS Electric Cars</a></h4>
          <p>
          <h5>
            Will hydrogen-fueled cars ever catch up to EVs?
          </h5>
          </p>
        </div> */}


        function reorderNews (newsItemId){
          console.log(newsItemId);
          for (i=0 ; i < theNews.length ; i++){
              document.addEventListener('click' , theNews[i]);
              let temp = theNews[0];
              theNews[0]= theNews[i];
              theNews[i] = temp;
          }

          }
        

        
        function renderNews (newsItems){
          let newsHtml = "";
          for (i=0; i < newsItems.length  ; i++) {
               const singleItem = newsItems[i];
               newsHtml+= `<div>
               <h4><a onclick="reorderNews(${singleItem.newsId})" href="#">${singleItem.title}</a></h4>
               <p>
               <h5>
               ${singleItem.description}
               </h5>
               </p>

             </div>
             <h4 class="border">______________________</h4>`
          } 
          document.getElementById("newsList").innerHTML= newsHtml; 
        } 
        renderNews (theNews);
        reorderNews (theNews);