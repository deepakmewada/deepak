window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
  window.location.replace("#");
  if (typeof window.history.replaceState == 'function') {
  history.replaceState({}, '', window.location.href.slice(0, -1));
}


// Feather Initial Code
feather.replace({
  width: 24,
  height: 24,
});

// Mouse Pointer Effect
const handleMouseMove = (event) => {
  const classList = event.srcElement.classList;
  let mouseEle = document.getElementById("mousePointer");
  classList.forEach((list) => {
    if (list === "zoom-pointer") {
      mouseEle.classList.add("zoom");
    } else if (list === "hide-mouse") {
      mouseEle.classList.add("hide");
    } else if (list === "read-more") {
      mouseEle.classList.add("active");
    } else if (list === "footer" || list === 'footer-text' || list === 'cursor-white' || list === 'copytext') {
      mouseEle.classList.add("footer");
    } else {
      mouseEle.classList.remove("footer");
      mouseEle.classList.remove("hide");
      mouseEle.classList.remove("zoom");
      mouseEle.classList.remove("active");
    }
  });
  mouseEle.style.top = event.clientY + "px";
  mouseEle.style.left = event.clientX + "px";
};
document.onmousemove = handleMouseMove;

// Init Wow.js
new WOW().init({
  offset: 200,
});

// Add View Class
var isInViewport = function (elem) {
  var distance = elem.getBoundingClientRect();
  var eleBottom = distance.top + distance.height;
  return distance.top > 200;
};
var findMe = document.querySelectorAll(".section");
window.addEventListener(
  "scroll",
  function (event, any) {
    // add event on scroll
    findMe.forEach((element) => {
      element.classList.remove("view");
      if (isInViewport(element)) {
        element.classList.add("view");
      }
    });
  },
  false
);


const classNa = document.querySelectorAll('.progress-bar');
for(let i=0;i<classNa.length ; i++){
    let xyz = classNa[i].attributes['data-percent'].nodeValue
    gsap.to(classNa[i], {
        scrollTrigger: '.skill-list', // start the animation when ".box" enters the viewport (once)
        width: xyz+ '%',
        duration: 2
      });
}

$(document).ready(function(){
    $('.wrapper').css('padding-bottom', $('footer').outerHeight())

    var tl = gsap.timeline({defaults: {duration: 2, ease: "none"}});
    tl.to("#firstHead", {duration: 3, scrambleText:{text:"Hello! Thanks for dropping by, I help businesses create their digital market.", chars:"lowerCase", revealDelay:0.5, tweenLength:false}})
    // GSDevTools.create({animation: tl, minimal: true});
})

if ($(".skill-list").length) {
    $(".skill-list li").one("inview", function () {
        $(this).addClass("inview");
    });
}
if ($(".counter").length) {
    $(".counter").each(function () {
        $(this).on("inview", function (event, isInView) {
            if (isInView) {
                var $this = $(this).find(".counter-value"),
                    countTo = $this.attr("data-count");
                $({ countNum: $this.text() }).animate(
                    { countNum: countTo },
                    {
                        duration: 3000,
                        easing: "swing",
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        },
                    }
                );
            } else {
            }
        });
    });
}


// Wrap every letter in a span
var textWrapper = document.querySelectorAll('.ml7 .letters');
textWrapper.forEach((item) => {
  item.innerHTML = item.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
})


const initLetter = function (item) {
  const { target, animated } = sectionWiseAnimation[item];
  if($(target).hasClass('animate__animated')){
    if(!animated){
      sectionWiseAnimation[item].animated = true 
      anime.timeline()
      .add({
        targets: `${target}.animate__animated .letter`,
        translateY: ["2.1em", 0],
        translateX: ["0.55em", 0],
        translateZ: 0,
        rotateZ: [180, 0],
        duration: 750,
        easing: "easeOutExpo",
        delay: (el, i) => 50 * i
      });
    }
    
  }
}

let sectionWiseAnimation = {
  banner: {
    target: '.banner-title',
    animated: false,
  }, 
  service: {
    target: '.service-title',
    animated: false,
  }, 
  skill: {
    target: '.skill-title',
    animated: false,
  }, 
  experience: {
    target: '.experience-title',
    animated: false,
  }, 
  contact: {
    target: '.contact-title',
    animated: false,
  }, 
}
let animate = false;
  anime.timeline()
      .add({
        targets: `.banner-title .letter`,
        translateY: ["2.1em", 0],
        translateX: ["0.55em", 0],
        translateZ: 0,
        rotateZ: [180, 0],
        duration: 750,
        easing: "easeOutExpo",
        delay: (el, i) => 50 * i
      })
      .add({
        targets: `.banner-title1 .letter`,
        translateY: ["2.1em", 0],
        translateX: ["0.55em", 0],
        translateZ: 0,
        rotateZ: [180, 0],
        duration: 750,
        easing: "easeOutExpo",
        delay: (el, i) => 50 * i
      });

      const animateSectionTitle = () => {
        Object.keys(sectionWiseAnimation).forEach((item) => {
          initLetter(item)
        })
      }

  $(window).scroll(function(event){
    animateSectionTitle()
    if($(this).scrollTop() > window.screen.height){
      $('.arrow-up').addClass('show');
    }else{
      $('.arrow-up').removeClass('show');
    }
  })

var tl = gsap.timeline({ repeat: -1 });
tl.to("h1", 60, { backgroundPosition: "-960px 0" });



$('.arrow-up').on('click',function(){
  window.scrollTo(0, 0);
})


$(window).scroll(function () {
  if ($(window).scrollTop() >= 91) {
      $('header').addClass('header-white');
  } else {
      $('header').removeClass('header-white');
  }
  didScroll = true;
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
}