function changeIcon(x) {
    x.classList.toggle("change");

    function dropdown() {
      document.getElementById("myLinks").classList.toggle("show");
    }
  }


  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.list_icon')) {
      let dropdowns = document.getElementsByClassName("myList");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  // function dropdown() {
  //   changeIcon(x);
  //   changeIcon(x) = document.getElementById("myLinks");
  //   if (changeIcon(x).style.display === "block") {
  //     changeIcon(x).style.display = "none";
  //   } else {
  //     changeIcon(x).style.display = "block";
  //   }
  // }
  