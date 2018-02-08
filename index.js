var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine[katzDeliLine.length] = name;
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
  var firstInLine = katzDeliLine[0];
  katzDeliLine.shift();
  return `Currently serving ${firstInLine}.`;
}
}


function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else {
    for(let i = 0; i<katzDeliLine.length; i++){
      var newArray = []
      newArray[newArray.length]= (i+1 + ". " + katzDeliLine[i])
    }
    return `The line is currently: ${newArray}`
}
}