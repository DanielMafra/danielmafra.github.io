const debounce=function(n,t,a){let i;return function(...o){const e=this,l=a&&!i;clearTimeout(i),i=setTimeout(function(){i=null,a||n.apply(e,o)},t),l&&n.apply(e,o)}},target=document.querySelectorAll("[data-anime]"),animationClass="animate";function animeScroll(){const n=window.pageYOffset+3*window.innerHeight/4;target.forEach(function(t){n>t.offsetTop?t.classList.add(animationClass):t.classList.remove(animationClass)})}function contact(){window.open("https://www.instagram.com/danielmafraoficial/","_blank")}animeScroll(),target.length&&window.addEventListener("scroll",function(){animeScroll()});