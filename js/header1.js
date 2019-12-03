//包含页头相关的所有代码
$(function(){
  $.ajax({
    url:"header.html",
    type:"get",
    success:function(html){
      //console.log(html);
      $(html).replaceAll("#header");
      $(`<link rel="stylesheet" href="css/header.css"/>`).appendTo("header");
    }
  })
}) 

// 包含页脚相关所有代码
$(function(){
  $.ajax({
    url:"footer.html",
    type:"get",
    success:function(html){
      $(html).replaceAll("#footer");
    }
  })
})