// ======= creat-table=======
let table = document.createElement("table");
table.className = "table mt-5";
let tr = document.createElement("tr");
table.appendChild(tr);
tr.className = "tr";
let thStt = document.createElement("th");
tr.appendChild(thStt);
thStt.innerText = "NO.";
thStt.className = "thStt col-1";

let thName = document.createElement("th");
tr.appendChild(thName);
thName.innerText = "NAME";
thName.className = "thName col-1";

let thAge = document.createElement("th");
tr.appendChild(thAge);
thAge.innerText = "AGE";
thAge.className = "thAge col-1";

let thMathScores = document.createElement("th");
tr.appendChild(thMathScores);
thMathScores.innerText = "MATH SCORES";
thMathScores.className = "thMathScores col-1";

let thPhysicalScores = document.createElement("th");
tr.appendChild(thPhysicalScores);
thPhysicalScores.innerText = "PHYSICAL SCORES";
thPhysicalScores.className = "thPhysicalScores col-1";

let thChemicalScores = document.createElement("th");
tr.appendChild(thChemicalScores);
thChemicalScores.innerText = "CHEMICAL SCORES";
thChemicalScores.className = "thChemicalScores col-1";

let thMediumScores = document.createElement("th");
tr.appendChild(thMediumScores);
thMediumScores.innerText = "MEDIUM SCORE";
thMediumScores.className = "thMediumScore col-1";

var stt = 0;
document.getElementById("root").appendChild(table);

//=======create input function=======
document.getElementById("submit").onclick = function () {
  var name = document.getElementById("id-name").value;
  var age = document.getElementById("id-age").value;
  var mathScores = document.getElementById("id-mathScores").value;
  var physicalScores = document.getElementById("id-physicalScores").value;
  var chemicalScores = document.getElementById("id-chemicalScore").value;

  stt++;
  content(stt, name, age, mathScores, physicalScores, chemicalScores);
};
//=======create rows containing unlimited information=======
var content = function (
  stt,
  name,
  age,
  mathScores,
  physicalScores,
  chemicalScores
) {
  let trCreatNew = document.createElement("tr");
  table.appendChild(trCreatNew);
  trCreatNew.id = "data" + stt;

  let tdStt = document.createElement("td");
  trCreatNew.appendChild(tdStt);
  tdStt.innerText = stt;

  let tdNameCreatNew = document.createElement("td");
  trCreatNew.appendChild(tdNameCreatNew);
  tdNameCreatNew.innerText = name;

  let tdAgeCreatNew = document.createElement("td");
  trCreatNew.appendChild(tdAgeCreatNew);
  tdAgeCreatNew.innerText = age;

  let tdMathScoresCreatNew = document.createElement("td");
  trCreatNew.appendChild(tdMathScoresCreatNew);
  tdMathScoresCreatNew.innerText = mathScores;

  let tdPhysicalScoresCreatNew = document.createElement("td");
  trCreatNew.appendChild(tdPhysicalScoresCreatNew);
  tdPhysicalScoresCreatNew.innerText = physicalScores;

  let tdChemicalScoresCreatNew = document.createElement("td");
  trCreatNew.appendChild(tdChemicalScoresCreatNew);
  tdChemicalScoresCreatNew.innerText = chemicalScores;

  let tdMediumScore = document.createElement("td");
  trCreatNew.appendChild(tdMediumScore);
  tdMediumScore.id = "mediumScore" + stt;
};
// =======retrieve the value in html and print out the average score=======

