const target=document.querySelectorAll("[data-anime]"),animationClass="animate";function animeScroll(){const n=window.pageYOffset+3*window.innerHeight/4;target.forEach(function(a){n>a.offsetTop?a.classList.add(animationClass):a.classList.remove(animationClass)})}function contact(){window.open("https://www.instagram.com/danielmafra.dev/","_blank")}animeScroll(),target.length&&window.addEventListener("scroll",function(){animeScroll()});