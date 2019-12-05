(function () {
  var box = document.getElementById("box");
  var endtime = new Date("2020/06/04"); //获取结束时间
  setInterval(function () { //  使用定时器获取现在的时间
    var nowtime = new Date(); //获取现在的时间
    var seconds = parseInt((endtime.getTime() - nowtime.getTime()) / 1000); //获取结束时间到现在时间之间的总秒数
    // console.log(seconds);
    let D = J0(parseInt(seconds / 3600 / 24)); //获取总的天数     —————>>J0()调用下面函数
    let H = J0(parseInt(seconds / 3600 % 24)); //获取小时数(取余)
    let M = J0(parseInt(seconds / 60 % 60)); //获取分钟数(取余)
    let S = J0(parseInt(seconds % 60)); //获取秒数(取余)
    box.innerHTML = D + " 天 " + H + " 小时 " + M + " 分 " + S + " 秒";
  })
  // 小于10数字前补零
  function J0(num) {
    if (num < 10) {
      num = "0" + num;
    }
    return num;
  }
})()