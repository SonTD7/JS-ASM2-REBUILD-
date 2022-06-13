// ======= creat-table=======
// let table = document.createElement("table");
// table.className = "table mt-5";
// let tr = document.createElement("tr");
// table.appendChild(tr);
// tr.className = "tr";
// let thStt = document.createElement("th");
// tr.appendChild(thStt);
// thStt.innerText = "NO.";
// thStt.className = "thStt col-1";

// let thName = document.createElement("th");
// tr.appendChild(thName);
// thName.innerText = "NAME";
// thName.className = "thName col-1";

// let thAge = document.createElement("th");
// tr.appendChild(thAge);
// thAge.innerText = "AGE";
// thAge.className = "thAge col-1";

// let thMathScores = document.createElement("th");
// tr.appendChild(thMathScores);
// thMathScores.innerText = "MATH SCORES";
// thMathScores.className = "thMathScores col-1";

// let thPhysicalScores = document.createElement("th");
// tr.appendChild(thPhysicalScores);
// thPhysicalScores.innerText = "PHYSICAL SCORES";
// thPhysicalScores.className = "thPhysicalScores col-1";

// let thChemicalScores = document.createElement("th");
// tr.appendChild(thChemicalScores);
// thChemicalScores.innerText = "CHEMICAL SCORES";
// thChemicalScores.className = "thChemicalScores col-1";

// let thMediumScores = document.createElement("th");
// tr.appendChild(thMediumScores);
// thMediumScores.innerText = "MEDIUM SCORE";
// thMediumScores.className = "thMediumScore col-1";

// var stt = 0;
// document.getElementById("root").appendChild(table);

// ======= creat-table======= jqujery

let table = $("<table>");
table.addClass("table mt-5");
let tr = $("<tr>");
table.append(tr);
tr.addClass(tr);

let thStt = $("<th>");
tr.append(thStt);
thStt.text("NO.");
thStt.addClass("thStt col-1");

let thName = $("<th>");
tr.append(thName);
thName.text("NAME");
thName.addClass("thName col-1");

let thAge = $("<th>");
tr.append(thAge);
thAge.text("AGE");
thAge.addClass("thAge col-1");

let thMathScores = $("<th>");
tr.append(thMathScores);
thMathScores.text("MATH SCORES");
thMathScores.addClass("thMathScores col-1");

let thPhysicalScores = $("<th>");
tr.append(thPhysicalScores);
thPhysicalScores.text("PHYSICAL SCORES");
thPhysicalScores.addClass("thPhysicalScores col-1");

let thChemicalScores = $("<th>");
tr.append(thChemicalScores);
thChemicalScores.text("CHEMICAL SCORES");
thChemicalScores.addClass("thChemicalScores col-1");

let thMediumScores = $("<th>");
tr.append(thMediumScores);
thMediumScores.text("MEDIUM SCORE");
thMediumScores.addClass("thMediumScores col-1");
var stt=0;
$("#root").append(table);

//=======create input function=======
// document.getElementById("submit").onclick = function () {
//   var name = document.getElementById("id-name").value;
//   var age = document.getElementById("id-age").value;
//   var mathScores = document.getElementById("id-mathScores").value;
//   var physicalScores = document.getElementById("id-physicalScores").value;
//   var chemicalScores = document.getElementById("id-chemicalScore").value;

//   stt++;
//   content(stt, name, age, mathScores, physicalScores, chemicalScores);
// };

//=======create input function======= jquery

$("#submit").click(function() {
  let name = $("#id-name").val();
  let age = $("#id-age").val();
  let mathScores = $("#id-mathScores").val();
  let physicalScores = $("#id-physicalScores").val();
  let chemicalScores = $("#id-chemicalScore").val();
  stt++;
  content(stt, name, age, mathScores, physicalScores, chemicalScores);
});

//=======create rows containing unlimited information=======
// var content = function (
//   stt,
//   name,
//   age,
//   mathScores,
//   physicalScores,
//   chemicalScores
// ) {
//   let trCreatNew = document.createElement("tr");
//   table.appendChild(trCreatNew);
//   trCreatNew.id = "data" + stt;

//   let tdStt = document.createElement("td");
//   trCreatNew.appendChild(tdStt);
//   tdStt.innerText = stt;

//   let tdNameCreatNew = document.createElement("td");
//   trCreatNew.appendChild(tdNameCreatNew);
//   tdNameCreatNew.innerText = name;

//   let tdAgeCreatNew = document.createElement("td");
//   trCreatNew.appendChild(tdAgeCreatNew);
//   tdAgeCreatNew.innerText = age;

//   let tdMathScoresCreatNew = document.createElement("td");
//   trCreatNew.appendChild(tdMathScoresCreatNew);
//   tdMathScoresCreatNew.innerText = mathScores;

//   let tdPhysicalScoresCreatNew = document.createElement("td");
//   trCreatNew.appendChild(tdPhysicalScoresCreatNew);
//   tdPhysicalScoresCreatNew.innerText = physicalScores;

//   let tdChemicalScoresCreatNew = document.createElement("td");
//   trCreatNew.appendChild(tdChemicalScoresCreatNew);
//   tdChemicalScoresCreatNew.innerText = chemicalScores;

//   let tdMediumScore = document.createElement("td");
//   trCreatNew.appendChild(tdMediumScore);
//   tdMediumScore.id = "mediumScore" + stt;
// };



//=======create rows containing unlimited information=======JQUERY (đoạn này em bị lỗi nè)
var content=function(stt,
    name,
    age,
    mathScores,
    physicalScores,
    chemicalScores){
let trCreatNew = $("<td>");
table.append(trCreatNew);
// trCreatNew.addId("data" + stt);

$(trCreatNew).attr("id","data" + stt);

let tdStt=$("<td>");
trCreatNew.append(tdStt);
tdStt.text(stt);

let tdNameCreatNew = $("<td>");
trCreatNew.append(tdNameCreatNew);
tdNameCreatNew.text(name);

let tdAgeCreatNew = $("<td>");
trCreatNew.append(tdAgeCreatNew);
tdAgeCreatNew.text(age);

let tdMathScoresCreatNew = $("<td>");
trCreatNew.append(tdMathScoresCreatNew);
tdAgeCreatNew.text(mathScores);

let tdPhysicalScoresCreatNew = $("<td>");
trCreatNew.append(tdPhysicalScoresCreatNew);
tdPhysicalScoresCreatNew.text(physicalScores);

let tdChemicalScoresCreatNew = $("<td>");
trCreatNew.append(tdChemicalScoresCreatNew);
tdChemicalScoresCreatNew.text(chemicalScores);

let tdMediumScore = $("<td>");
trCreatNew.append(tdMediumScore);
// tdMediumScore.addId("mediumScore" + stt);
$(tdMediumScore).attr("id","mediumScore" + stt);
  }

// =======retrieve the value in html and print out the average score=======
document.getElementById("averageScore").onclick = function () {
  for (let i = 1; i <= stt; i++) {
    let dataScore = document.getElementById("data" + i);
    let data1_stt = dataScore.childNodes[3];
    let data2_stt = dataScore.childNodes[4];
    let data3_stt = dataScore.childNodes[5];
    const average =
      (Number(data1_stt.innerHTML) +
        Number(data2_stt.innerHTML) +
        Number(data3_stt.innerHTML)) /
      3;
    document.getElementById("mediumScore" + i).innerHTML = average;
  }
};

//====== confirm good student and color red======

document.getElementById("classification").onclick = function () {
  for (let i = 1; i <= stt; i++) {
    let average = document.getElementById("mediumScore" + i).innerHTML;
    if (average >= 8.5) {
      document.getElementById("mediumScore" + i).style.backgroundColor = "red";
    }
  }
};
