var politician = {};
politician.name = "";
politician.electionResults = null;
politician.totalVotes = 0;

var createPolitician = function (name){
  var politician = {};
  politician.name = name;
  politician.electionResults= null;
  politician.totalVotes = 0;
  
  return politician;
};

var rowena = createPolitician ("Rowena Ayudan");
var billy = createPolitician ("Billy Vilaboy");

rowena.electionResults [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,28,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];

billy.electionResults[4,2,4,4,22,3,3,1,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

rowena.electionResults[9] = 1;
billy.electionResults[9] = 28;
 
rowena.electionResults[4] = 17;
billy.electionResults[4] = 38;
 
rowena.electionResults[43] = 11;
billy.electionResults[43] = 27;
 
console.log(rowena.electionResults);
console.log(billy.electionResults);

var setStateResults = function(state){
  
  theStates[state].winner = null;
  
  if (billy.electionResults[state] > rowena.electionResults[state] {
      
      theStates[state].winner = billy;
      
}else if (billy.electionResults[state] < rowena.electionResults[state]) {
    
    theStates[state].winner = rowena;
  }

  var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];
  
  stateName.innerText = theStates[state].nameFull;
abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
 
candidate1Name.innerText = billy.name;
candidate2Name.innerText = rowena.name;
 
candidate1Results.innerText = betsy.electionResults[state];
candidate2Results.innerText = jane.electionResults[state];
 
if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}
  
politician.tallyUptotalVotes = function(){
    this.totalVotes = 0; 
    for (var i = 0; i < this.electionResults.length; i++){
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
 };
  
  var stateWinner = theStates[state].winner;
  
  if(stateWinner !== null) {
    
    theStates[state].rgbColor = stateWinner.partyColor;
    
  } else {
    
    theStates[state].rgbColor = [11,3,57];
  }

rowena.tallyUpTotalVotes();
billy.tallyUpTotalVotes();

   console.log(rowena.totalVotes);
   console.log(billy.totalVotes);

var winner = "???"
if (rowena.totalVotes > billy.totalVotes){
  winner =rowena.name;
}else if (rowena.totalVotes < billy.totalVotes){
  winner = billy.name;
}else {
  winner = "DRAW."
}

console.log("AND THE WINNER IS ..." + winner + "!");

var createPoliticianb= function(name,partyColor){
  politician.partyColor = partyColor
  return politician;
}  
  var rowena = createPolitician("Rowena Ayudan", [245,141,136]);
  var billy = createPolitician("Billy Vilaboy", [132,17,11]);

  console.log ("Rowena's color is :" = rowena.partyColor);
  console.log ("Billy's color is :" = billy.partyColor);
  
  var countryInfoTable = document.getElementById('countryResults');
  var row = countryInfoTable.children[0].children[0];
  row.children[0].innerText =billy.name;
  row.children[1].innerText =billy.totalVotes;
  row.children[2].innerText =rowena.name;
  row.children[3].innerText =rowena.totalVotes;
  row.children[4].innerText =winner;
















