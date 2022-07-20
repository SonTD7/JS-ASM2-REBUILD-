// //khai bao
// const employee = "https://rjs101xbackend.herokuapp.com/staffs"
// fetch(employee)
//      .then((response) => response.json())
//      .then((data) => console.log(data));

//---------------------------------------------------------
// $("#nhanVien").click(() =>{
// fetch("https://rjs101xbackend.herokuapp.com/staffs")
//   .then(function (staffsJson) {
//     let result = staffsJson.json().then((staffs) => {
//       loadDepartments(staffs)
//     });
//   })
//   .catch((error) => {
//     alert(error);
//   });
// })
// var loadDepartments = (staffs) => {
//   console.log(staffs);
//   fetch("https://rjs101xbackend.herokuapp.com/departments")
//   .then(function (departmentsJson) {
//     let result = departmentsJson.json().then((departments) => {
//       console.log(departments);
//     // dòng 24 này em xem trên mạng tại em chưa thấy cái nào để nó nhận là nó sẽ chui vào root.
//       const divRoot = document.querySelector(".root");
//       divRoot.append(theme);
//       let theme = $("<div>");
//       theme.addClass("container");
//       let row = $("<div>");
//       theme.append(row);
//       row.addClass("row");
//       for (let i = 0; i < staffs.length; i++) {
//         const element = staffs[i];

//         //tạo giao diện nhân viên
//         let content = $("<div>");
//         row.append(content);
//         content.addClass(
//           "row1 col-12 col-md-2 d-flex mr-3 img-thumbnail align-self-center"
//         );
//         content.html(imgName(element, departments));
//       }
     
//     });
//      $("#root").html(theme);
//   })
  
//   .catch((error) => {
//     alert(error);
//   });
// };

//----------------------------------------------------------


//=======Chỗ này tương tự bên kia nên em thả tạm vào thử chạy ko xong em sửa lại để đơn giản phần css nhất có thể=======


// var imgName = (employee, departments) => {
//   let imgNv = $("<div>");
//   imgNv.addClass("image");
//   let image = document.createElement("img");

//   image.src = "/IMG_5098.jpg";
//   imgNv.append(image);
//   let overlay = $("<div>");
//   overlay.addClass("overlay");
//   imgNv.append(overlay);

//   let salary = $("<p>");
//   salary.addClass("amount");
//   overlay.append(salary);
//   salary.append(employee.salary);

//   let dob = $("<p>");
//   dob.addClass("h6");
//   overlay.append(dob);
//   const d = new Date(employee.doB);
//   dob.append(d.getFullYear() + "/" + d.getDate() + "/" + (d.getMonth() + 1));

//   console.log(d);
//   console.log(employee.doB);

//   let departmentElement = $("<div>");
//   departmentElement.addClass("h6");
//   overlay.append(departmentElement);
//   for (let i = 0; i < departments.length; i++) {
//     const department = departments[i];
//     if (department.id === employee.departmentId) {
//       departmentElement.append(department.name);
//     }
//   }

//   let canTakeBreaks = $("<p>");
//   canTakeBreaks.addClass("h6");
//   overlay.append(canTakeBreaks);
//   canTakeBreaks.append("Can take breaks:" + employee.annualLeave);

//   let numberWorking = $("<p>");
//   numberWorking.addClass("h6");
//   overlay.append(numberWorking);
//   numberWorking.append("Number of working days:" + employee.overTime);
//   let name = $("<p>");
//   name.addClass("h5");
//   overlay.append(name);
//   name.append(employee.name);
//   return imgNv;
// };

// 7 load all on link ->9or12 //// 9 đổi cái dữ liệu nhận được thành dạng Json, sau đó nó gọi hàm loadDe... và truyền staffs vào 

// mò https://www.w3schools.com/js/js_async.asp


$("#nhanVien").click(() =>{
var staffs = 'https://rjs101xbackend.herokuapp.com/staffs';
fetch(staffs)
.then(function (response) {
  return response.json();
  //Json.parse: JSON -> JS 
})
.then(function(infoStaffs){
  console.log(infoStaffs);
  var  htmls = infoStaffs.map(function (infoStaff){
    return `<div class="container"> 
    <div class="row">
    <p>${infoStaff.name}</p>
    </div>
    </div>`
  });
  var html = htmls.join('');
  $("#root").html(html);
})
.catch(function (err) {
  alert('co loi roi be son oi');
});
});