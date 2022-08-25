$("#nhanVien").click(async () => {
  var staffLink = "https://rjs101xbackend.herokuapp.com/staffs";
  const response = await fetch(staffLink);
  const infoStaffs = await response.json();
  console.log(infoStaffs);

  var departmentLink = "https://rjs101xbackend.herokuapp.com/departments";
  const response01 = await fetch(departmentLink);
  const department = await response01.json();
  console.log(department);

  var htmls = infoStaffs.map(function (infoStaff) {
    var departmentName;
    for (var i = 0; i < department.length; i++) {
      if (department[i].id === infoStaff.departmentId) {
        departmentName = department[i].name;
      }
    }
    return `    
          <div class="col-12 col-md-2 mb-3" >
            <div class="card img-fluid" style="width:200px">
              <img class="card-img-top" src="./img/IMG_5098.jpg" alt="Card image" style="width:100%">
              <div class="card-img-overlay">
                <h6 class="card-title">${infoStaff.name}</h6>
                <p class="card-text">${departmentName}</p>
                <p class="card-text">${infoStaff.doB}</p>
                <p class="card-text">${infoStaff.salary}</p>
                <a href="#" class="btn btn-primary">See Profile</a>
              </div>
            </div>
          </div>
          `;
  });

  var html = htmls.join("");

  html = `  <div class="container"> 
<div class="row">
${html} 
</div>
</div> `;

  $("#root").html(html);
});
