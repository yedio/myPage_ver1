//스크롤 값 console
document.addEventListener('scroll', function() {
  var currentScrollValue = document.documentElement.scrollTop;
  console.log('currentScrollValue is ' + currentScrollValue);
});


//헤더 스타일 변경
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (pageYOffset !== 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


/* jQuery */

//top버튼 생성 + top버튼 누르면 올라가게 하기
$(function() {
  $(window).scroll(function() {
      if ($(this).scrollTop() > 500) {
          $('#MOVE_TOP_BTN').fadeIn();
      } else {
          $('#MOVE_TOP_BTN').fadeOut();
      }
  });
  
  $("#MOVE_TOP_BTN").click(function() {
      $('html, body').animate({
          scrollTop : 0
      }, 400);
      return false;
  });
});


//원하는 위치로 이동 
$(document).ready(function($) {
  $("#START_BTN").click(function(event){         
          event.preventDefault();
          $('html,body').animate({scrollTop:$(this.hash).offset().top- $(this.hash).height() / 2+50}, 500);
  });

});