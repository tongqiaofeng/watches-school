let url = window.location.href;
$('.liHome a').each(function () {
  // console.log($(this));
  if (returnUrl($(this).attr('href')) == returnUrl(url)) {
    console.log($(this).parent().parent().parent('.liHome'));
    if ($(this).parent().parent().parent('.liHome').length !== 0) {
      $(this).parent().parent().parent().children(":first").addClass('active');
    } else {
      $(this).parent().parent().parent().children(":first").removeClass('active');
    }
    $(this).addClass('active');
  } else {
    $(this).removeClass('active');
  }
});
$('.min-liHome a').each(function () {
  // console.log($(this));
  if (returnUrl($(this).attr('href')) == returnUrl(url)) {
    if ($(this).parent().parent().parent('.min-liHome').length !== 0) {
      $(this).parent().parent().parent().children(":first").addClass('active');
    } else {
      $(this).parent().parent().parent().children(":first").removeClass('active');
    }
    $(this).addClass('active');
  } else {
    $(this).removeClass('active');
  }
});
//以下为截取url的方法
function returnUrl(href) {
  let number = href.lastIndexOf("/");
  return href.substring(number + 1);
}

function returnFileName(href) {
  let number1 = href.lastIndexOf("/");
  let number2 = href.substring(0, number1).lastIndexOf("/");
  return href.substring(number1, number2 + 1);
}

$("li.hiddenLi").click(function () {
  console.log($(this).parent().parent().children(":first"));
  $(this).parent().parent().children(":first").addClass("visi");
  console.log('111');
  console.log($(this));
  $(this).addClass("active").siblings().removeClass("active");
})
$(".min-icon").click(function () {
  if ($(".min-navbar").css('display') == 'none') {
    $(".min-navbar").css('display', 'block')
  } else if ($(".min-navbar").css('display') == 'block') {
    $(".min-navbar").css('display', 'none')
  }
})
$(".about").click(function () {
  $(this).parent().parent().siblings().css('margin-top', '0');
  if ($(".classes").parent().siblings !== '') {
    $(".classes").parent().next().css('display', 'none')
  }
  if ($(".drow").parent().siblings !== '') {
    $(".drow").parent().next().css('display', 'none')
  }
  if ($(this).parent().next().css('display') == 'none') {
    $(this).parent().next().css('display', 'block');
    $(this).parent().parent().next().css('margin-top', '200px');
  } else if ($(this).parent().next().css('display') == 'block') {
    $(this).parent().parent().next().css('margin-top', '0');
    $(this).parent().next().css('display', 'none');
    if ($(".classes").parent().siblings !== '') {
      $(".classes").parent().next().css('display', 'none')
    }
    if ($(".drow").parent().siblings !== '') {
      $(".drow").parent().next().css('display', 'none')
    }
  }
})
$(".classes").click(function () {
  $(this).parent().parent().css('margin-top', '0');
  $(this).parent().parent().siblings().css('margin-top', '0');
  if ($(".about").parent().siblings !== '') {
    $(".about").parent().next().css('display', 'none')
  }
  if ($(".drow").parent().siblings !== '') {
    $(".drow").parent().next().css('display', 'none')
  }
  if ($(this).parent().next().css('display') == 'none') {
    $(this).parent().next().css('display', 'block');
    $(this).parent().parent().next().css('margin-top', '150px');
  } else if ($(this).parent().next().css('display') == 'block') {
    $(this).parent().next().css('display', 'none');
    $(this).parent().parent().siblings().css('margin-top', '0');
    if ($(".about").parent().siblings !== '') {
      $(".about").parent().next().css('display', 'none')
    }
    if ($(".drow").parent().siblings !== '') {
      $(".drow").parent().next().css('display', 'none')
    }
  }
})
$(".drow").click(function () {
  $(this).parent().parent().siblings().css('margin-top', '0');
  if ($(".about").parent().siblings !== '') {
    $(".about").parent().next().css('display', 'none')
  }
  if ($(".classes").parent().siblings !== '') {
    $(".classes").parent().next().css('display', 'none')
  }
  if ($(this).parent().next().css('display') == 'none') {
    $(this).parent().next().css('display', 'block');
    $(this).parent().parent().next().css('margin-top', '100px');
  } else if ($(this).parent().next().css('display') == 'block') {
    $(this).parent().next().css('display', 'none');
    $(this).parent().parent().siblings().css('margin-top', '0');
    if ($(".about").parent().siblings !== '') {
      $(".about").parent().next().css('display', 'none')
    }
    if ($(".classes").parent().siblings !== '') {
      $(".classes").parent().next().css('display', 'none')
    }
  }
})
// $("li.min-liHome").click(function () {
//   $(this).children(":first").addClass("min-active").siblings().removeClass("min-active");
//   // console.log('333');
//   // console.log($(this).prev().children(":first"));
//   $(this).prev().children(":first").removeClass("min-active");
//   $(this).prev().prev().children(":first").removeClass("min-active");
//   $(this).prev().prev().prev().children(":first").removeClass("min-active");
//   $(this).prev().prev().prev().prev().children(":first").removeClass("min-active");
//   $(this).prev().prev().prev().prev().prev().children(":first").removeClass("min-active");
//   $(this).next().children(":first").removeClass("min-active");
//   $(this).next().next().children(":first").removeClass("min-active");
//   $(this).next().next().next().children(":first").removeClass("min-active");
//   $(this).next().next().next().next().children(":first").removeClass("min-active");
//   $(this).next().next().next().next().next().children(":first").removeClass("min-active");
// })
// $("li.min-hiddenLi").click(function () {
//   console.log($(this).parent().parent().children(":first"));
//   $(this).parent().parent().children(":first").addClass("min-visi");
//   console.log('111');
//   console.log($(this));
//   $(this).addClass("min-active").siblings().removeClass("min-active");
// })