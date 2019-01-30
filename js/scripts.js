
function Ticket(movieName, showTime, age){
  this.movieName = movieName,
  this.showTime = showTime,
  this.age = age
  this.index = [];
}

Ticket.prototype.determineCost = function() {
  this.cost = this.age + this.showTime + this.movieName;
  return this.cost;
}

$(document).ready(function(){
  $("#formId").submit(function(event){
    event.preventDefault();
    var inputtedMovieName = parseInt($("#movieName").val());
    var inputtedMovieTime = parseInt($("#movieTime").val());
    var inputtedAge = parseInt($("#age").val());

    $("#movieName").val("");
    $("#movieTime").val("");
    $("#age").val("");


    var newTicket = new Ticket(inputtedMovieName, inputtedMovieTime, inputtedAge);
    console.log(newTicket);
    var ticketCost = newTicket.determineCost();
    console.log(ticketCost);

    $("#price").text(ticketCost);
  });
});
