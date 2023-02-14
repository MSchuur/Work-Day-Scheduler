
// Wait for code to render all elements in html.
$(document).ready(function() {

  // Set day and time in header
  var today = dayjs();
  $("#currentDay").text(today.format('dddd, MMMM Do YYYY h:mm'));

  // Event if the save button beside the textarea is clicked.
  $(".saveBtn").click(function(event) {
    event.preventDefault();
    var saveText = $(this).siblings(".description").val();
    var hourIndex = $(this).parent().attr("id");

  // Set the textarea data to local storage
    localStorage.setItem(hourIndex, saveText);
  })
  
  // Function to detirmine the color of each hour.
  // Determine what hour it is now.
  function updateShedulerColor() {
    var now = dayjs().hour();

    // Loop through the hour time block.
    $(".time-block").each(function () {
      var time = parseInt($(this).attr("id").split("hour-")[1]);
      
      // Determine past, present or future and change to appropriate color.
      if(now > time) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
      }
      else if (now === time) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    })
  }
  // Get locally stored date and render to the correct hour.
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  updateShedulerColor();
  
})
