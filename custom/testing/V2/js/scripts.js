document.addEventListener('DOMContentLoaded', function() {
  var randomInterval;
  (function repeat(){
    randomInterval = Math.floor((Math.random()*8000)+5000);
    backgroundChange();
    h1BackgroundChange();
    setTimeout(repeat, randomInterval);
})();


// Functions Start
// Landing Screen Start

var  animationDuration = Math.floor((Math.random()*5000)+1000);
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
//Background H1 color aniamtion state $Finish$
// Landing Screen Finish
// Content Top Start
// Content Top Finish

// Parallax
$( document ).ready(function() {
    var scroll;
    var scrollN;
    var $scroll;
    var didScroll = false;
    var projectHeightValue = $("#projectExample1").height();
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
        for (i = 1; i < 3; i++) {
          if ($scroll >= locationPos[i]) {
            elementsReveal();
          }
        }
      }
    }, 500);



    function landingScreen() {

    }


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



    var windowHeight = $(window).height();
    var scroll;
    var aboutHeader = $('#aboutHeader');
    var aboutHeaderLoc = $('#aboutHeader').offset().top;
    var aboutHeaderHeight = $('#aboutHeader').height();
    var aboutContainerLoc = $('#aboutContainer').offset().top;
    var aboutHeaderLocCheck = true;
    var pauseAboutHeader = true;

    $(window).scroll(function(){
        // Landing Screen Name
          scroll = $(window).scrollTop();
          var name = $('#landingScreenName');
          var nameLoc = $('#landingScreenName').offset().top;
          var nameLocBottom = $('#landingScreenName').outerHeight();

          if (scroll<=nameLoc) {
            $('#landingScreenName').css({'transform' : 'translate(0px, '+scroll+'%)'});
            $('#landingScreenName').css({'opacity' : ''+ 1-scroll/500+''});
            var pauseScroll = scroll;
          }
          else {
            $('#landingScreenName').css({'transform' : 'translate(0px, '+pauseScroll+'%)'});
          }
        // Project Title
        var introPos = $('#portfolioIntro').offset().top;
        var introHeight = $('#portfolioIntro').outerHeight();

        if (scroll <=introPos) {
          $('#portfolioIntro').css({'top' : '+'+scroll/5+'px'});
        }
        else {
          $('#portfolioIntro').css({'top' : ''+pauseScroll+''});
        }

        //About header
        var scrollW = scroll+windowHeight;
        var scrollPause = scrollW-(windowHeight/5);

        if (pauseAboutHeader) {
          if (scrollW >= aboutHeaderLoc) {
            $('#aboutHeader').css({'transform': 'translate(0,'+(scroll-(aboutHeaderLoc-windowHeight))/3+'%)'});
          }
          if (scrollPause >= aboutContainerLoc) {
            if (aboutHeaderLocCheck) {
              aboutHeaderLocCheck = false;
              pauseAboutHeader = false;
              var aboutHeaderPausedLoc = (scroll-(aboutHeaderLoc-windowHeight))/3;
            }
          }
        }
        if (scrollPause <= aboutContainerLoc) {
          aboutHeaderLocCheck = true;
          pauseAboutHeader = true;
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














    // Effect on image when hovered

    // Change browser title on leaving
    $(function() {
      var message = "👀";
      var original;

      $(window).focus(function() {
        if (original) {
          document.title = original;
        }
      }).blur(function() {
        var title = $('title').text();
        if (title != message) {
          original = title;
        }
        document.title = message;
      });
    });
    }, false);

});
// Functions End
