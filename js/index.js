// ======= creat-table=======
let table = document.createElement("table");
table.className = "table";
let tr = document.createElement("tr");
table.appendChild(tr);
tr.className = "tr";
let thStt = document.createElement("th");
thStt.innerText = "NO."
thStt.className = "thStt col-1" 
tr.appendChild(thStt);
let thName = document.createElement("th");
thName.innerText = "NAME";
thName.className = "thName col-1";
tr.appendChild(thName);
let thAge = document.createElement("th");
thAge.innerText="AGE";
thAge.className="thAge col-1";
tr.appendChild(thAge);
let thMathScores = document.createElement("th");
thMathScores.innerText = "MATH SCORES";
thMathScores.className = "thMathScores col-1";
tr.appendChild(thMathScores);
let thPhysicalScores=document.createElement("th");
thPhysicalScores.innerText="PHYSICAL SCORES";
thPhysicalScores.className="thPhysicalScores col-1";
tr.appendChild(thPhysicalScores);
let thChemicalScores=document.createElement("th");
thChemicalScores.innerText="CHEMICAL SCORES";
thChemicalScores.className="thChemicalScores col-1";
tr.appendChild(thChemicalScores);

document.getElementById("root").appendChild(table);