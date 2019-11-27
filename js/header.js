$("li.liHome").click(function () {
  // console.log($(this).children());
  $(this).addClass("active").siblings().removeClass("active");
  if ($(this).children().length > 1) {
    $(this).children(":last").addClass("visi");
  }
})
$("li.hiddenLi").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
})
console.log($(window).width());
// if ($(window).width() < 1035) {
//   console.log('111');
//   $(".header-right").css('display', 'hidden');
//   $(".min-header-right").css('display', 'block');
// }
$(".min-icon").click(function () {
  if ($(".min-navbar").css('display') == 'none') {
    $(".min-navbar").css('display', 'block')
  } else if ($(".min-navbar").css('display') == 'block') {
    $(".min-navbar").css('display', 'none')
  }
})
$(".about").click(function () {
  if($(".classes").parent().parent().siblings !== ''){
    $(".classes").parent().parent().children(":last").css('display','none')
  }
  if($(".drow").parent().parent().siblings !== ''){
    $(".drow").parent().parent().children(":last").css('display','none')
  }
  // console.log($(this).parent().siblings());
  if ($(this).parent().siblings().css('display') == 'none') {
    $(this).parent().siblings().css('display', 'block');
  } else if ($(this).parent().siblings().css('display') == 'block') {
    $(this).parent().siblings().css('display', 'none');
    // console.log($(this).parent().parent().siblings().children());
    // console.log($(".classes").parent().parent());
    if($(".classes").parent().parent().siblings !== ''){
      $(".classes").parent().parent().children(":last").css('display','none')
    }
    if($(".drow").parent().parent().siblings !== ''){
      $(".drow").parent().parent().children(":last").css('display','none')
    }
  }
})
$(".classes").click(function () {
  // console.log($(this).parent().siblings());
  if($(".about").parent().parent().siblings !== ''){
    $(".about").parent().parent().children(":last").css('display','none')
  }
  if($(".drow").parent().parent().siblings !== ''){
    $(".drow").parent().parent().children(":last").css('display','none')
  }
  if ($(this).parent().siblings().css('display') == 'none') {
    $(this).parent().siblings().css('display', 'block');
  } else if ($(this).parent().siblings().css('display') == 'block') {
    $(this).parent().siblings().css('display', 'none');
    // console.log($(this).parent().parent().siblings().children());
    // console.log($(".about").parent().parent());
    if($(".about").parent().parent().siblings !== ''){
      $(".about").parent().parent().children(":last").css('display','none')
    }
    if($(".drow").parent().parent().siblings !== ''){
      $(".drow").parent().parent().children(":last").css('display','none')
    }
  }
})
$(".drow").click(function () {
  // console.log($(this).parent().siblings());
  if($(".about").parent().parent().siblings !== ''){
    $(".about").parent().parent().children(":last").css('display','none')
  }
  if($(".classes").parent().parent().siblings !== ''){
    $(".classes").parent().parent().children(":last").css('display','none')
  }
  if ($(this).parent().siblings().css('display') == 'none') {
    $(this).parent().siblings().css('display', 'block');
  } else if ($(this).parent().siblings().css('display') == 'block') {
    $(this).parent().siblings().css('display', 'none');
    // console.log($(this).parent().parent().siblings().children());
    // console.log($(".about").parent().parent());
    if($(".about").parent().parent().siblings !== ''){
      $(".about").parent().parent().children(":last").css('display','none')
    }
    if($(".classes").parent().parent().siblings !== ''){
      $(".classes").parent().parent().children(":last").css('display','none')
    }
  }
})
$("li.min-liHome").click(function () {
  $(this).children(":first").addClass("min-active").siblings().removeClass("min-active");
  // console.log('333');
  // console.log($(this).prev().children(":first"));
  $(this).prev().children(":first").removeClass("min-active");
  $(this).prev().prev().children(":first").removeClass("min-active");
  $(this).prev().prev().prev().children(":first").removeClass("min-active");
  $(this).prev().prev().prev().prev().children(":first").removeClass("min-active");
  $(this).prev().prev().prev().prev().prev().children(":first").removeClass("min-active");
  $(this).next().children(":first").removeClass("min-active");
  $(this).next().next().children(":first").removeClass("min-active");
  $(this).next().next().next().children(":first").removeClass("min-active");
  $(this).next().next().next().next().children(":first").removeClass("min-active");
  $(this).next().next().next().next().next().children(":first").removeClass("min-active");
})
$("li.min-hiddenLi").click(function () {
  console.log($(this).parent().parent().children(":first"));
  $(this).parent().parent().children(":first").addClass("min-visi");
  console.log('111');
  console.log($(this));
  $(this).addClass("min-active").siblings().removeClass("min-active");
})