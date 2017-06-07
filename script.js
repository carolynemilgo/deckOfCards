$(document).ready(function(){

  var suits =["flowers","hearts","diamonds","spades"];
  var ranks =[2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
  suits.forEach(function(suit){
    ranks.forEach(function(rank){
      return $(".results").text(rank +" of "+suit);
    });
  });
});
