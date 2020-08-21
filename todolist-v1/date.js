
exports.getDate = function(){
  //var date=new Date().getDay();
  var date=new Date();
  //var day="";
  var options = {
    weekday:"long",
    day: "numeric",
    month: "long"
  };
  return date.toLocaleDateString("en-US", options);
  // if(date===6){
  //   day="Saturday";
  // }
  // else if(date===0){
  //   day="Sunday";
  // }else if(date===1){
  //   day="Monday";
  // }
  // else if(date===2){
  //   day="Tuesday";
  // }
  // else if(date===3){
  //   day="Wednesday";
  // }
  // else if(date===4){
  //   day="Thursday";
  // }
  // else if(date===5){
  //   day="Friday";
  // }
  // else{
  //   console.log("day = "+date);
  // }

}
