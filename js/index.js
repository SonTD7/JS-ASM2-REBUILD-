$("#nhanVien").click(() => {
  $.ajax({
    url: "https://rjs101xbackend.herokuapp.com/staffs",
    success: function (response) {
      console.log(response);
      let theme = $("<div>");
      theme.addClass("container");
      let row = $("<div>");
      theme.append(row);
      row.addClass("row");
      for (let i = 0; i < response.length; i++) {
        const element = response[i];

        //tạo giao diện nhân viên
        let content = $("<div>");
        row.append(content);
        content.addClass(
          "row1 col-12 col-md-2 d-flex mr-3 img-thumbnail align-self-center"
        );
        content.html(imgName(element));
      }
      $("#root").html(theme);
    },
    error: function (response) {
      console.log(response);
    },
  });
});

var imgName = (employee) => {
  let imgNv = $("<div>");
  imgNv.addClass("image");
  let image = document.createElement("img");

  image.src = "/IMG_5098.jpg";
  imgNv.append(image);
  // imgNv.html(element.imgNv);
  // imgNv.click(function (){

  //   console.log(element.name, element.doB,  element.salaryScale, element.startDate);
  // });

  let overlay = $("<div>");
  overlay.addClass("overlay");
  imgNv.append(overlay);

  let salary = $("<p>");
  salary.addClass("amount");
  overlay.append(salary);
  salary.append(employee.salary);

  // let name = $("<p>");
  // name.addClass("h5");
  // overlay.append(name);
  // name.append(employee.name);

  let dob = $("<p>");
  dob.addClass("h6");
  overlay.append(dob);
  const d = new Date(employee.doB);
  dob.append(d.getFullYear() +'/'+ d.getDate()+'/'+(d.getMonth()+1));

console.log(d);
console.log(employee.doB);


  let department = $("<p>");
  department.addClass("h6");
  overlay.append(department);
  department.append(employee.departmentId);

  let canTakeBreaks = $("<p>");
  canTakeBreaks.addClass("h6");
  overlay.append(canTakeBreaks);
  canTakeBreaks.append(employee.annualLeave);

  let numberWorking = $("<p>");
  numberWorking.addClass("h6");
  overlay.append(numberWorking);
  numberWorking.append(employee.overTime);
  let name = $("<p>");
  name.addClass("h5");
  overlay.append(name);
  name.append(employee.name);

  // content(salary, name, dob, department, canTakeBreaks, numberWorking);
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

// từ b gọi hai hàm thuộc b, một hàng in ra dòng chữ là, -> đã gọi hàm c, cái còn lại là đã gọi hàm d
