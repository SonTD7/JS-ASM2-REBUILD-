$("#nhanVien").click(() => {
  var staffs = "https://rjs101xbackend.herokuapp.com/staffs";
  fetch(staffs)
    .then(function (response) {
      return response.json();
      //Json.parse: JSON -> JS
    })
    .then(function (infoStaffs) {
      console.log(infoStaffs);
      var htmls = infoStaffs.map(function (infoStaff) {

        return `    
  <div class="col-12 col-md-2 mb-3" >
    <div class="card img-fluid" style="width:200px">
       <img class="card-img-top" src="./img/IMG_5098.jpg" alt="Card image" style="width:100%">
      <div class="card-img-overlay">
         <h6 class="card-title">${infoStaff.name}</h6>
         <p class="card-text">${infoStaff.departmentId}</p>
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
    
    })
    .catch(function (err) {
      alert("co loi roi be son oi");
    });
});
