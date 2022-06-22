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

var imgName = (element) => {
  let imgNv = $("<div>");
  let image = document.createElement('img');
  
  image.src  = '/IMG_5098.jpg';
  imgNv.append(image);
  // imgNv.html(element.imgNv);
  imgNv.click(function (){
    console.log(element.name, element.doB,  element.salaryScale, element.startDate);
  });
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
