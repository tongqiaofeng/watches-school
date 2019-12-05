let url = window.location.href;
console.log(url);
//以下为截取url的方法
function returnUrl(href) {
  // indexOf 是查某个指定的字符串在字符串首次出现的位置（索引值） （也就是从前往后查）
  // lastIndexOf 是从右向左查某个指定的字符串在字符串中最后一次出现的位置（也就是从后往前查）
  // indexOf是从前向后查  而lastIndexOf是从后向前查   但是二者返回索引都是从前开始数数和计算的
  let number = href.lastIndexOf("/");
  return href.substring(number + 1);
}

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