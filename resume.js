$(window).scroll(() => {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 20);
});

$("body").scrollspy({ target: "#list-example" });

$(document).ready(() => {
  $(window).scroll(() => {
    if ($(this).scrollTop() > 850) {
      $(".progress1").animate({ width: "90%" }, 2000);
      $(".corejava").animate({ width: "90%" }, 2000);
      $(".progress2").animate({ width: "10%" }, 2000);
      $(".j2ee").animate({ width: "10%" }, 2000);
      $(".progress3").animate({ width: "80%" }, 2000);
      $(".jdbc").animate({ width: "80%" }, 2000);
      $(".progress4").animate({ width: "90%" }, 2000);
      $(".serv").animate({ width: "90%" }, 2000);
      $(".progress5").animate({ width: "75%" }, 2000);
      $(".hib").animate({ width: "75%" }, 2000);
      $(".progress6").animate({ width: "75%" }, 2000);
      $(".mav").animate({ width: "75%" }, 2000);
      $(".progress7").animate({ width: "90%" }, 2000);
      $(".html").animate({ width: "90%" }, 2000);
      $(".progress8").animate({ width: "80%" }, 2000);
      $(".javas").animate({ width: "80%" }, 2000);
      $(".progress9").animate({ width: "80%" }, 2000);
      $(".angular").animate({ width: "80%" }, 2000);
      $(".progress10").animate({ width: "90%" }, 2000);
      $(".git").animate({ width: "90%" }, 2000);
      $(".progress11").animate({ width: "80%" }, 2000);
      $(".mysql").animate({ width: "80%" }, 2000);
      $(".progress12").animate({ width: "70%" }, 2000);
      $(".nomy").animate({ width: "70%" }, 2000);
    }
  });
});

$(document).ready(() => {
  var dur = 500;

  $(window).scroll(() => {
    if ($(this).scrollTop() < 250) {
      $(".to-top").fadeOut(dur);
    } else {
      $(".to-top").fadeIn(dur);
    }
  });
});
