$(function() {
  var _wd = $("#wd");
  var _wd_div = _wd.children();
  var _width = $(window).width();
  var _height = $(window).height();
  var imgs = $("img");
  var timer;
  var row = 15;
  var max = imgs.length;

  function style_1() {
    clearTimeout(timer);
    clearInterval(timer);
    var img_array = [];
    function next() {
      var max_time = 0;
      randomImgArray();
      imgs.css("opacity", 0.2);
      var defaul_time = 0;
      img_array.forEach((i,v)=>{
        var time = Math.random()*2;
        setTimeout(function() {
          imgs.eq(i).css("opacity", 1);
        }, time*1000 + 500);
        defaul_time = Math.max(defaul_time, time);
      });
      setTimeout(()=>{
        next();
      }, defaul_time*1000 + 500 + Math.random()*5000);
    }
    next();
    function randomImgArray() {
      img_array.length = 0;
      function a() {
        var num = Math.floor(Math.random()*max);
        // console.log(num);
        if(!(num in img_array)) {
          let r = true;
          for(let x in img_array) {
            // console.log(x);
            if(Math.abs(num - x) == 20) {
              r = false;
              break;
            }
          }
          if(r) {
            img_array.push(num);
          } else {
            a();
          }
        }
      }
      var f = length => Array.from({length}).map((v, k) => k);
      for (x of f(10)) {
          a();
      }
    }
  }

  function style_flash() {
    clearTimeout(timer);
    clearInterval(timer);
    var timer = 3000;
    var currentIndex = 0;
    var time = 3000;
    function getNextRandom() {
      var a = Math.floor(Math.random()*max);
      if(a != currentIndex) {
        currentIndex = a;
        return a;
      } else {
        getNextRandom();
      }
    }
    function a() {
      timer = setTimeout(()=> {
        getNextRandom();
        _wd_div.filter(".show").removeClass("show");
        _wd_div.eq(currentIndex).addClass("show");
        a();
      }, time);
    }
    a();

    $("body").mousemove(function(e) {
      var x = e.pageX;
      var y = e.pageY;
      clearTimeout(timer);
      if(x > (_width/2)-150 && x < _width/2+150) {
        if(y > _height/2-150 && y < _height/2+150) {
          time = 60;
          a();
        }
      } else {
        time = 3000;
        a();
      }
    });
  }

  var styles = ()=>{
    style_1();
    var w = $("#styles");
    var d = w.find(".wrapper div");
    var width = $(window).width();
    w.click(function(e) {
      if(e.target != $(this).get(0)) {
        return;
      }
      w.toggleClass("show");
    });
    d.eq(0).addClass("current");
    d.click(function(e) {
      change_style($(this));
      e.preventDefault();
    });
    function change_style() {
      var _ = arguments[0];
      if(_.hasClass("current")) {
        return;
      }
      d.removeClass("current");
      var class_name = _.attr("data-type");
      _.addClass("current");
      _wd.removeClass();
      if(class_name == "small-pics") {
        style_1();
      } else if(class_name == "flash") {
        _wd.addClass("style-flash");
        style_flash();
      } else if(class_name == "slider") {
        _wd.addClass("style-slider");
      }
      w.removeClass("show");
    };
    var timer;
    $("body").mousemove(function(e) {
      var x = e.pageX;
      var y = e.pageY;
      if(x > width - 100 && y < 100) {
        clearTimeout(timer);
        timer = setTimeout(function() {
          w.addClass("show");
        }, 4000);
      } else {
        clearTimeout(timer);
      }
    });
  }
  styles();
});
