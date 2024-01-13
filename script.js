document.getElementById("parseButton").addEventListener("click", function () {
  var inputText = document.getElementById("inputText").value;
  var syntaxOutput = document.getElementById("syntaxOutput");
  var wordSenseOutput = document.getElementById("wordSenseOutput");

  // Using compromise for basic NLP
  var doc = nlp(inputText);
  var tagsOutput = doc.out("tags");
  var people = doc.people().out("array");
  var places = doc.places().out("array");
  var organizations = doc.organizations().out("array");

  syntaxOutput.textContent = JSON.stringify(tagsOutput, null, 2);

  var wordSenseData = {
    people: people,
    places: places,
    organizations: organizations,
    // Add more data here as needed
  };
  wordSenseOutput.textContent = JSON.stringify(wordSenseData, null, 2);
});
