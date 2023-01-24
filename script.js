let identEl = $()
$("button").on("click", function(event){

    console.log($(event.target).siblings("textarea").val())
    let dataTimeEl = $(event.target).attr("data-time");
    localStorage.setItem(dataTimeEl, $(event.target).siblings("textarea").val());
    console.log()
    $(event.target).siblings("textarea").text(localStorage.getItem(dataTimeEl));
})


for (let i = 0; i < $("textarea", ".container").length; i++) {
  
}

$('#currentDay').html(moment().format("dddd, MMMM Do YYYY"))
  let time = moment().format("H")


  function setScheduler(hour){

  if(parseInt(hour) < parseInt(time))
  {
    $("button").siblings("textarea").addClass("past");
  }
  else if(parseInt($("button").attr("data-time")) === parseInt(time)){
    $("button").attr("data-time",([i+8])).siblings("textarea").addClass("present");
    
  }
  else{
    $("button").attr("data-time",([i+8])).siblings("textarea").addClass("future");
  }
}

$("#8am").text(localStorage.getItem("8"))
$("#9am").text(localStorage.getItem("9"))
$("#10am").text(localStorage.getItem("10"))
$("#11am").text(localStorage.getItem("11"))
$("#12pm").text(localStorage.getItem("12"))
$("#1pm").text(localStorage.getItem("13"))
$("#2pm").text(localStorage.getItem("14"))
$("#3pm").text(localStorage.getItem("15"))
$("#4pm").text(localStorage.getItem("16"))
$("#5pm").text(localStorage.getItem("17"))
  




  