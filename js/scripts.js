function roboRogers(N) {
  let rogersArray = [];
  let neighborhood = [];
  let newNeighbor = " ";
  for (let i=0; i <= N; i ++) {
    rogersArray.push(i.toString());
    if (rogersArray[i].includes("3")) {
      neighborhood.push("Won't you be my neighbor?");
    }
    else if (rogersArray[i].includes("2")) {
      neighborhood.push("Boop! ");
    }
    else if (rogersArray[i].includes("1")) {
      neighborhood.push("Beep! ");
    }
    else {
      neighborhood.push(rogersArray[i]+ ",");
    }      
  } 
  return neighborhood
}

$(document).ready(function(){
  $("form#response").submit(function(event){
    event.preventDefault();
    let newNeighbor = $("input#name").val();
    let N =$("input#number").val();
    let newSweater = roboRogers(N);
    $("#robogersNum").text(newSweater);
    $("#neigh").text(newNeighbor);
      $("#results").show();
  });
});
