
// //스크롤 값 console
// document.addEventListener('scroll', function() {
//   var currentScrollValue = document.documentElement.scrollTop;
//   console.log('currentScrollValue is ' + currentScrollValue);
// });



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

/*
//원하는 위치로 이동 
$(document).ready(function($) {
  $("#START_BTN").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top- $(this.hash).height() / 2+50}, 500);
  });
});
*/

/*
//스크롤함에따라 콘텐츠 생성

$(document).ready(function() {
    $(window).scroll( function(){
			
        $('.content_left').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 5;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},2000);
            }           
        }); 
    });
});


//스크롤함에따라 콘텐츠 생성(margin)
$(document).ready(function() {
  $(window).scroll( function(){
      $('.content_right').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight()/ 3;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'margin-right':'0px'},1000);
          }
          
      }); 
  });
});

*/

//sticky 

var left = document.getElementById("left");
var profile = document.getElementById("ITEM_PROFILE");
var stop = (left.offsetTop-500);


window.onscroll = function (e) {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    //console.log(scrollTop,"offsetTop: "+left.offsetTop);
    //left.offsetTop;

    if (scrollTop >= stop) {
        left.className = 'stick';
        profile.className = 'OPACITY';
    } else {
        left.className = '';
        profile.className = '';
    }
}
/*
//스크롤 애니메이션
const saTriggerMargin = 300;
const saElementList = document.querySelectorAll('.sa');

const saFunc = function() {
for (const element of saElementList) {
    if (!element.classList.contains('show')) {
    if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
        element.classList.add('show');
    }
    }
}
}

window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);
*/

// $(document).ready(function() {
//   $(window).scroll( function(){
//       $('.item5').each( function(i){
//           var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//           var bottom_of_window = $(window).scrollTop() + $(window).height();
//           if( bottom_of_window > bottom_of_object/5 ){
//               $('.item5').animate({'opacity':'1'},500);
//           }
//       }); 
//   });
// });



/*
//선택자가 스크롤이 되었는지?
$('#ITEM2').on('wheel', function() {
  console.log("Scrolled!-2")
  $('.text2').animate({'opacity':'100'},300);
})
$('#ITEM3').on('wheel', function() {
  console.log("Scrolled!-3")
  $('.text3').animate({'opacity':'100'},300);
})

*/



function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), 
        scrolltop = $(window).scrollTop(), 
        y = $(elm).offset().top,
        elementHeight = $(elm).height();   
    
    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}

// var isVisible = false;
// var isVisible3 = false;

// $(window).on('scroll',function() {
//   if (checkVisible($('#ITEM2'))&&!isVisible) {
//       $('.text2').animate({'opacity':'100'},300);
//       isVisible = true;
//   }
//   if (checkVisible($('#ITEM3'))&&!isVisible3) {
//     $('.text3').animate({'opacity':'100'},300);
//     isVisible3 = true;
//   }
// });

let opaSpeed=1000;
$(window).on('scroll',function() {
  if (checkVisible($('#ITEM2'))) {
    $('.text2').animate({'opacity':'100'},opaSpeed);
  }
  if (checkVisible($('#ITEM3'))) {
    $('.text3').animate({'opacity':'100'},opaSpeed);
  }
  if (checkVisible($('#ITEM4'))) {
    $('.text4').animate({'opacity':'100'},opaSpeed);
  }
  if (checkVisible($('#ITEM5'))) {
    $('.text5').animate({'opacity':'100'},opaSpeed);
  }
  if (checkVisible($('#ITEM6'))) {
    $('.text6').animate({'opacity':'100'},opaSpeed);
    
  }
});


