function changeIcon(x) {
  x.classList.toggle("change");

  x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
let theNews = [
  {
    title: "The Downsides of AI Artistry",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "Hydrogen VS Electric Cars",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    description: 
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
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
          const temp= theNews[newsItemId];
          let newArray = theNews.slice(0, newsItemId).concat(theNews.slice(newsItemId + 1));
          newArray = [{...temp}].concat(newArray);
          theNews = newArray;
          renderNews (newArray);
        }

        function renderNews (newsItems){
          let newsHtml = "";
          for (i=0; i < newsItems.length  ; i++) {
               const singleItem = newsItems[i];
               newsHtml+= `<div>
               <h4><a onclick="reorderNews(${i})" href="#">${singleItem.title}</a></h4>
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
       
