// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var myArray=[];
  for (var i=0; i < musicians.length; i++)
  {
    var sentence=musicians[i] + " plays " + instruments[i];
    myArray.push(sentence);
  }
  return myArray;
}
function johnLennonFacts(sayings)
{
  var i=0;
  var myArray=[];
  while (i < sayings.length)
  {
    var singleSaying= sayings[i] + "!!!";
    myArray.push(singleSaying);
    i++;
  }
  return myArray;
}