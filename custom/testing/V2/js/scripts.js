document.addEventListener('DOMContentLoaded', function() {
  var randomInterval;
  (function repeat(){
    randomInterval = Math.floor((Math.random()*8000)+5000);
    backgroundChange();
    h1BackgroundChange();
    scrollH4Change();
    scrollArrowChange();
    setTimeout(repeat, randomInterval);
  });
});


// Functions Start
// Landing Screen Start

var  animationDuration = Math.floor((Math.random()*5000)+2000);
function h1BackgroundChange() {
  document.getElementById("landingScreenName").style["animation-duration"] = animationDuration + "ms";
  setTimeout(function(){ h1play() }, 700);
  setTimeout(function(){ h1stop() }, animationDuration + 1000);
}
function backgroundChange() {
  document.getElementById("landingScreen").style["animation-duration"] = animationDuration + "ms";
  setTimeout(function(){ play() }, 1000);
  setTimeout(function(){ stop() }, animationDuration + 1000);
}
function scrollH4Change() {
  document.getElementById("scroll").style["animation-duration"] = animationDuration + "ms";
  setTimeout(function(){ playScrollH4() }, 700);
  setTimeout(function(){ stopScrollH4() }, animationDuration + 1000);
}
function scrollArrowChange() {
  document.getElementById("scrollArrow").style["animation-duration"] = animationDuration + "ms";
  setTimeout(function(){ playScrollArrow() }, 700);
  setTimeout(function(){ stopScrollArrow() }, animationDuration + 1000);
}
//Background color aniamtion state $Start$
function play() {
  var name = document.getElementById("landingScreen");
  name.classList.remove("stop");
  name.classList.add("play");
}
function stop() {
  var name = document.getElementById("landingScreen");
  name.classList.remove("play");
  name.classList.add("stop");
}
//Background color aniamtion state $Finsish$
//Background H1 color aniamtion state $Start$
function h1play() {
  var name = document.getElementById("landingScreenName");
  name.classList.remove("h1stop");
  name.classList.add("h1play");
}
function h1stop() {
  var name = document.getElementById("landingScreenName");
  name.classList.remove("h1play");
  name.classList.add("h1stop");
}
// Scroll colours changing
function playScrollH4() {
  var name = document.getElementById("scroll");
  name.classList.remove("scrollh4stop");
  name.classList.add("scrollh4play");
}
function stopScrollH4() {
  var name = document.getElementById("scroll");
  name.classList.remove("scrollh4play");
  name.classList.add("scrollh4stop");
}
function playScrollArrow() {
  var name = document.getElementById("scrollArrow");
  name.classList.remove("scrollarrowstop");
  name.classList.add("scrollarrowplay");
}
function stopScrollArrow() {
  var name = document.getElementById("scrollArrow");
  name.classList.remove("scrollarrowplay");
  name.classList.add("scrollarrowstop");
}
//Background H1 color aniamtion state $Finish$
// Landing Screen Finish

// PreLoader Start
  $(window).on('load', function(){
    $("#loader").fadeOut();
    $("#preLoader").delay(500).fadeOut();
  })

// PreLoader End

// Parallax
$( document ).ready(function() {
    var scroll;
    var scrollN;
    var $scroll;
    var didScroll = false;
    var projectHeightValue = $("#projectExample1").height();
    var landingScreenHeight = $("#landingScreen").outerHeight();
    var landingScreenLocBottom = $("#landingScreen").offset().top + landingScreenHeight;
    var portfolioLoc = landingScreenLocBottom-100;
    var aboutLoc = $("#about").offset().top - 100;
    var i

    $(window).scroll(function(){
      scroll = $(window).scrollTop();
      scrollN = (scroll+skillsHeight)+500;
      $scroll = $(window).scrollTop() + projectHeightValue;
      didScroll = true;
    });

    setInterval(function() {
      if(didScroll){
        didScroll = false;
        if (scrollN >= skillsLoc) {
          skills();
        }
        if (scroll >= portfolioLoc) {
          showNav();
        }
        if (scroll <= portfolioLoc) {
          hideNav();
        }
        if (scroll >= aboutLoc) {
          changeNavColor();
        }
        if (scroll <= aboutLoc) {
          resetNavColor();
        }
        for (i = 1; i < 3; i++) {
          if ($scroll >= locationPos[i]) {
            elementsReveal();
          }
        }
      }
    }, 500);


    //Elements revealing

    var locationPos = [];
    var portfolioImageCover = [];
    var viewContainer = [];
    var titleCover = [];
    var title = [];
    var titlePosTop = [];
    var titleHeight = [];
    var titleWidth = [];
    var titleCover = [];
    var titleB = [];
    var titleBPos = [];
    var titleBHeight = [];
    var titleBWidth = [];
    var titleBCover = [];

    for (var i = 1; i < 4; i++) {
    title[i] = $("#title"+i);
    titlePosTop[i] = title[i].position().top+5;
    titleHeight[i] = title[i].outerHeight();
    titleWidth[i] = title[i].outerWidth();
    titleCover[i] = $("#titleCover"+i);
    titleCover[i].css({"top": titlePosTop[i]+"px","height": titleHeight[i]+"px","width":titleWidth[i]+"px"});
    }
    for (var i = 1; i < 3; i++) {
    titleB[i] = $("#titleB"+i);
    titleBPos[i] = titleB[i].position().top+5;
    titleBHeight[i] = titleB[i].outerHeight();
    titleBWidth[i] = titleB[i].outerWidth();
    titleBCover[i] = $("#titleBCover"+i);
    titleBCover[i].css({"top": titleBPos[i]+"px","height": titleBHeight[i]+"px","width":titleBWidth[i]+"px"});
    }

    for (var i = 1; i < 3; ++i) {
      portfolioImageCover[i] = $("#portfolioImageCover"+i);
      viewContainer[i] = $("#viewContainer"+i);
      locationPos[i] = portfolioImageCover[i].offset().top;
    }

    function elementsReveal() {
      portfolioImageCover[i].animate({width: "0"}, 600);
       for (var x = 1; x < 4 ; x++) {
         title[x].delay(x*100).animate({"margin-left": "0"}, 100);
         titleCover[x].delay(x*100).animate({"margin-left": "0"}, 100);
         titleCover[x].delay(x*100).animate({"width": "0"}, 100);
       }
       viewContainer[1].delay(i*800).animate({left: "0", opacity: "1"}, 200);
        if (i >= 2) {
          for (var n = 1; n < 3 ; n++) {
            titleB[n].delay(n*100).animate({"margin-left": "0"}, 100);
            titleBCover[n].delay(n*100).animate({"margin-left": "0"}, 100);
            titleBCover[n].delay(n*100).animate({"width": "0"}, 100);
            }
        }
        if (i >= 2) {
          viewContainer[2].delay(i*300).animate({left: "0", opacity: "1"}, 200);
        }
    }


    var pauseScroll;
    var windowHeight = $(window).height();
    var scroll;
    $(window).scroll(function(){
        // Landing Screen Name
          scroll = $(window).scrollTop();
        // Project Title
        var introPos = $('#portfolioIntro').offset().top;
        var introHeight = $('#portfolioIntro').outerHeight();

        if (scroll <=introPos) {
          $('#portfolioIntro').css({'top' : '+'+scroll/5+'px'});
        }
        else {
          $('#portfolioIntro').css({'top' : ''+pauseScroll+''});
        }
    });

    // Skills up and down on entering view
    var skillsLoc = $('#skills').offset().top;
    var skillsHeight = $('#skills').outerHeight();
    var skillBars = [];
    var skillValues = [];
    var skillImages = [];
    for (var i = 1; i < 4; i++) {
      skillBars[i]=$('#skillBar'+i);
      skillValues[i]=$('#skillValue'+i);
      skillImages[i]=$('#skillImage'+i);
    }
    var skillCounterRun = true;

    function skills() {
        if (skillCounterRun) {
          skillCounterRun = false;
          var skillCount1 = 0;
            var skillCounter1 = setInterval(function(){
                if (skillCount1 == 100) clearInterval(skillCounter1);
                skillValues[1].text(skillCount1+'%');
                skillCount1++;
            },
            1);
          var skillCount2 = 0;
            var skillCounter2 = setInterval(function(){
                if (skillCount2 == 100) clearInterval(skillCounter2);
                skillValues[2].text(skillCount2+'%');
                skillCount2++;
            },
            1);
          var skillCount3 = 0;
            var skillCounter3 = setInterval(function(){
                if (skillCount3 == 25) clearInterval(skillCounter3);
                skillValues[3].text(skillCount3+'%');
                skillCount3++;
            },
            15);
      }
      skillBars[1].animate({'width':'100%'}, 1600);
      skillImages[1].animate({'opacity':'1'},1000);
      skillBars[2].animate({'width':'100%'}, 1600);
      skillImages[2].animate({'opacity':'1'},1000);
      skillBars[3].animate({'width':'25%'}, 1000);
      skillImages[3].animate({'opacity':'1'},1000);

  }

  var changingNavColor = false;
  var navOpen = false;

    //Scroll Navigation
    function showNav() {
      $("#headerNavigation").css({'visibility': 'visible'});
    }
    function hideNav() {
      $("#headerNavigation").css({'visibility': 'hidden'});
    }
    function changeNavColor() {
      $("#showMenu").animate({'color':'white'}, 20);
      $("#hideMenu").animate({'color':'black'}, 20);
      $("#navigation a").animate({'color':'black'}, 100);
      if (navOpen) {
        $("#headerNavigation").animate({'background-color': 'white'},100);
      }
      else {
        $("#headerNavigation").animate({'background-color': 'transparent'},100);
      }
      changingNavColor = true;
    }
    function resetNavColor() {
      $("#showMenu").animate({'color':'black'}, 20);
      $("#hideMenu").animate({'color':'white'}, 20);
      $("#navigation a").animate({'color':'white'}, 100);
      if (navOpen) {
        $("#headerNavigation").animate({'background-color': 'black'},100);
      }
      else {
        $("#headerNavigation").animate({'background-color': 'transparent'},100);
      }
      changingNavColor = false;
    }

    //Show Navigation
    $("#showMenu").click(function(event) {
      event.preventDefault();
      $("#navigation").animate({"margin-left": "0"}, 300);
      $("#showMenu").css({"display": "none"});
      $("#hideMenu").css({"display": "block"});
      if (changingNavColor) {
        $("#headerNavigation").animate({"background-color": "white"}, 500);
        $("#hideMenu").animate({"color": "black"}, 200);
      }
      else {
        $("#headerNavigation").animate({"background-color": "rgb(0, 0, 0)"}, 500);
        $("#hideMenu").animate({"color": "white"}, 200);
      }
      navOpen = true;
    });
    // Hide Navigation
    $("#hideMenu").click(function(event) {
      event.preventDefault();
      $("#navigation").animate({"margin-left": "-100%"}, 300);
      $("#hideMenu").css({"display": "none"});
      $("#showMenu").css({"display": "block"});
      if (changingNavColor) {
        $("#showMenu").css({"color": "white"});
      }
      else {
        $("#showMenu").css({"color": "black"});
      }
      navOpen = false;
      $("#headerNavigation").animate({"background-color": "transparent"}, 500);
    });

    $(".scrollTo").click(function(event) {
      $("#navigation").animate({"margin-left": "-100%"}, 300);
      $("#headerNavigation").animate({"background-color": "transparent"}, 500);
      $("#hideMenu").css({"display": "none"});
      $("#showMenu").css({"display": "block"});
      if (changingNavColor) {
        $("#showMenu").css({"color": "white"});
      }
      else {
        $("#showMenu").css({"color": "black"});
      }
      navOpen = false;
    });


    // Scroll Down
    $("#scrollDown").click(function(event) {
      event.preventDefault();
      var scrollTarget = $("#scrollProjects").offset().top;
      $('html, body').animate({scrollTop: scrollTarget}, 1000);
    });

    // Scroll to location
    var scrollLink = $('.scrollTo');
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({scrollTop: $(this.hash).offset().top}, 1000);
    });

    //Change active Link

    var scrollHome = $("#scrollHome").offset() - 100;
    var scrollProjects = $("#scrollProjects").offset();
    var scrollAbout = $("#scrollAbout").offset();
    var scrollContact = $("#scrollContact").offset();
    var scrollSkills = $("#scrollSkills").offset();

    $(document).ready(function() {
      $(window).scroll(function() {

        var screenPosition = $(document).scrollTop() + 50;

        if (screenPosition <= scrollHome.top) {
          $( ".activeHome" ).removeClass( "active" );
        }
        if (screenPosition >= scrollHome.top) {
          $( ".activeHome" ).addClass( "active" );
          $( ".activeProjects" ).removeClass( "active" );
        }
        if (screenPosition >= scrollProjects.top) {
          $( ".activeProjects" ).addClass( "active" );
          $( ".activeHome" ).removeClass( "active" );
          $( ".activeAbout" ).removeClass( "active" );
        }
        if (screenPosition >= scrollAbout.top) {
          $( ".activeAbout" ).addClass( "active" );
          $( ".activeProjects" ).removeClass( "active" );
          $( ".activeContact" ).removeClass( "active" );
        }
        if (screenPosition >= scrollContact.top) {
          $( ".activeContact" ).addClass( "active" );
          $( ".activeAbout" ).removeClass( "active" );
          $( ".activeSkills" ).removeClass( "active" );
        }
        // if (screenPosition <= scrollSkills.top) {
        //   $( ".activeContact" ).removeClass( "active" );
        // }
        if (screenPosition >= scrollSkills.top) {
          $( ".activeSkills" ).addClass( "active" );
          $( ".activeContact" ).removeClass( "active" );
        }
      })
    })


    // Change browser title on leaving
    $(function() {
      var message = "👀";
      var original;

      $(window).focus(function() {
        if (original) {
          document.title = original;
        }
      })
      .blur(function() {
        var title = $('title').text();
        if (title != message) {
          original = title;
        }
        document.title = message;
      });
    });

});
// Functions End
