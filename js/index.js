$("#nhanVien").click(() => {
  $.ajax({
    url: "https://rjs101xbackend.herokuapp.com/staffs",
    success: function (staffs) {
      console.log(staffs);
loadDepartments(staffs);
    },
    error: function (response) {
      console.log(response);
    },
  });
});
var loadDepartments = (staffs) =>{
  $.ajax({
    url: "https://rjs101xbackend.herokuapp.com/departments",
    success: function (departments) {
      console.log(departments);   
      let theme = $("<div>");
      theme.addClass("container");
      let row = $("<div>");
      theme.append(row);
      row.addClass("row");
      for (let i = 0; i < staffs.length; i++) {
        const element = staffs[i];

        //tạo giao diện nhân viên
        let content = $("<div>");
        row.append(content);
        content.addClass(
          "row1 col-12 col-md-2 d-flex mr-3 img-thumbnail align-self-center"
        );
        content.html(imgName(element,departments));
      }
      $("#root").html(theme);
    },
    error: function (response) {
      console.log(response);
    },
  });
}


var imgName = (employee, departments) => {
  let imgNv = $("<div>");
  imgNv.addClass("image");
  let image = document.createElement("img");

  image.src = "/IMG_5098.jpg";
  imgNv.append(image);
  let overlay = $("<div>");
  overlay.addClass("overlay");
  imgNv.append(overlay);

  let salary = $("<p>");
  salary.addClass("amount");
  overlay.append(salary);
  salary.append(employee.salary);

  let dob = $("<p>");
  dob.addClass("h6");
  overlay.append(dob);
  const d = new Date(employee.doB);
  dob.append(d.getFullYear() +'/'+ d.getDate()+'/'+(d.getMonth()+1));

console.log(d);
console.log(employee.doB);


  let departmentElement = $("<div>");
  departmentElement.addClass("h6");
  overlay.append(departmentElement);
  for(let i=0; i<departments.length; i++) {
    const department = departments[i];
    if (department.id === employee.departmentId){
      departmentElement.append(department.name);
    }
  }
  

  let canTakeBreaks = $("<p>");
  canTakeBreaks.addClass("h6");
  overlay.append(canTakeBreaks);
  canTakeBreaks.append( "Can take breaks:"  + employee.annualLeave);
  

  let numberWorking = $("<p>");
  numberWorking.addClass("h6");
  overlay.append(numberWorking);
  numberWorking.append("Number of working days:" + employee.overTime);
  let name = $("<p>");
  name.addClass("h5");
  overlay.append(name);
  name.append(employee.name);
  return imgNv;
};

//Ý tưởng => tạo một form chứa ảnh và tên => khi ấn vào form sự kiện cuộn trang
//ajax là công cụ kết nối server
// post/ pass/ put/ delete

// fetch('https://rjs101xbackend.herokuapp.com/staffs')
// .then(function (response) {
// let result = response.json().then(commits => console.log(commits));
// })
// .catch(error => {
// alert(error);
// });

//async await fetch (để đưa thư viện ra ngoài và cho phép nó chạy tuần tự, cái này chạy xong thì cái kia mới chạy )

// từ b gọi hai hàm thuộc b, một hàng in ra dòng chữ là, -> đã gọi hàm c, cái còn lại là đã gọi hàm d
