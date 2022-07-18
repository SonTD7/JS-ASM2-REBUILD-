// //khai bao
// const employee = "https://rjs101xbackend.herokuapp.com/staffs"
// fetch(employee)
//      .then((response) => response.json())
//      .then((data) => console.log(data));
$("#nhanVien").click(() =>{
fetch("https://rjs101xbackend.herokuapp.com/staffs")
  .then(function (staffsJson) {
    let result = staffsJson.json().then((staffs) => {
      loadDepartments(staffs)
    });
  })
  .catch((error) => {
    alert(error);
  });
})
var loadDepartments = (staffs) => {
  console.log(staffs);
  fetch("https://rjs101xbackend.herokuapp.com/departments")
  .then(function (departmentsJson) {
    let result = departmentsJson.json().then((departments) => {
      console.log(departments);
    

    });
  })
  .catch((error) => {
    alert(error);
  });
};
// 7 load all on link ->9or12 //// 9 đổi cái dữ liệu nhận được thành dạng Json, sau đó nó gọi hàm loadDe... và truyền staffs vào 

// mò https://www.w3schools.com/js/js_async.asp