/*$("button").on("click", function(event){

    if(localStorage.getItem("9a") !== null)
    {
      localStorage.clear("9a")
               
   }

    else{         
      localStorage.setItem("9a", $("textarea").val())
      console.log(localStorage.getItem("9a"))
    }
  })
*/

$("button").on("click", function(event){

    console.log($(event.target).siblings("textarea").val())
    let dataTimeEl = $(event.target).attr("data-time");
    localStorage.setItem(dataTimeEl, $("textarea").val());
    $(event.target).siblings("textarea").text(localStorage.getItem(dataTimeEl));
})

    
  
  $('#currentDay').html(moment().format("dddd, MMMM Do YYYY"))
  let time = moment().format("H")

  console.log(time)
  

  if(parseInt($("button").attr("data-time")) < parseInt(time))
  {
    console.log(time)
 //   $("textarea").addClass("future")
  }