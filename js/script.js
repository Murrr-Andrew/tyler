var promoLogoElement = document.getElementById("promoLogo");
if(typeof(promoLogoElement) != 'undefined' && promoLogoElement != null) {
  var promoLogo = bodymovin.loadAnimation({
      container: document.getElementById('promoLogo'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
  	  path: 'https://murrr-andrew.github.io/tyler/rc/animationJson/promo.json'
  });
  document.getElementById('promoLogo').addEventListener("mouseenter", function() {
      promoLogo.play();
      document.getElementById("promoLogo").classList.remove("colored");
  });
  promoLogo.addEventListener("complete", function() {
      promoLogo.stop();
      document.getElementById("promoLogo").classList.add("colored");
  });
} 

var agentLogoElement = document.getElementById("agentLogo");
if(typeof(agentLogoElement) != 'undefined' && agentLogoElement != null) {
  var agentLogo = bodymovin.loadAnimation({
      container: document.getElementById('agentLogo'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
  	  path: 'https://murrr-andrew.github.io/tyler/rc/animationJson/agent.json'
  });
  document.getElementById('agentLogo').addEventListener("mouseenter", function() {
      agentLogo.play();
      document.getElementById("agentLogo").classList.remove("colored");
  });
  agentLogo.addEventListener("complete", function() {
      agentLogo.stop();
      document.getElementById("agentLogo").classList.add("colored");
  });
} 

var communLogoElement = document.getElementById("communLogo");
if(typeof(communLogoElement) != 'undefined' && communLogoElement != null) {
  var communLogo = bodymovin.loadAnimation({
      container: document.getElementById('communLogo'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
  	  path: 'https://murrr-andrew.github.io/tyler/rc/animationJson/commun.json'
  });
  document.getElementById('communLogo').addEventListener("mouseenter", function() {
      communLogo.play();
      document.getElementById("communLogo").classList.remove("colored");
  });
  communLogo.addEventListener("complete", function() {
      communLogo.stop();
      document.getElementById("communLogo").classList.add("colored");
  });
} 

var targetLogoElement = document.getElementById("targetLogo");
if(typeof(targetLogoElement) != 'undefined' && targetLogoElement != null) {
  var targetLogo = bodymovin.loadAnimation({
      container: document.getElementById('targetLogo'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
  	  path: 'https://murrr-andrew.github.io/tyler/rc/animationJson/target.json'
  });
  document.getElementById('targetLogo').addEventListener("mouseenter", function() {
      targetLogo.play();
      document.getElementById("targetLogo").classList.remove("colored");
  });
  targetLogo.addEventListener("complete", function() {
      targetLogo.stop();
      document.getElementById("targetLogo").classList.add("colored");
  });
} 

var autoLogoElement = document.getElementById("autoLogo");
if(typeof(autoLogoElement) != 'undefined' && autoLogoElement != null) {
  var autoLogo = bodymovin.loadAnimation({
      container: document.getElementById('autoLogo'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
  	  path: 'https://murrr-andrew.github.io/tyler/rc/animationJson/auto.json'
  });
  document.getElementById('autoLogo').addEventListener("mouseenter", function() {
      autoLogo.play();
      document.getElementById("autoLogo").classList.remove("colored");
  });
  autoLogo.addEventListener("complete", function() {
      autoLogo.stop();
      document.getElementById("autoLogo").classList.add("colored");
  });
} 

var convLogoElement = document.getElementById("convLogo");
if(typeof(convLogoElement) != 'undefined' && convLogoElement != null) {
  var convLogo = bodymovin.loadAnimation({
      container: document.getElementById('convLogo'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
  	  path: 'https://murrr-andrew.github.io/tyler/rc/animationJson/conv.json'
  });
  document.getElementById('convLogo').addEventListener("mouseenter", function() {
      convLogo.play();
      document.getElementById("convLogo").classList.remove("colored");
  });
  convLogo.addEventListener("complete", function() {
      convLogo.stop();
      document.getElementById("convLogo").classList.add("colored");
  });
} 

var cpushLogoElement = document.getElementById("cpushLogo");
if(typeof(cpushLogoElement) != 'undefined' && cpushLogoElement != null) {
  var cpushLogo = bodymovin.loadAnimation({
      container: document.getElementById('cpushLogo'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
  	  path: 'https://murrr-andrew.github.io/tyler/rc/animationJson/cpush.json'
  });
  document.getElementById('cpushLogo').addEventListener("mouseenter", function() {
      cpushLogo.play();
      document.getElementById("cpushLogo").classList.remove("colored");
  });
  cpushLogo.addEventListener("complete", function() {
      cpushLogo.stop();
      document.getElementById("cpushLogo").classList.add("colored");
  });
} 

var lgenLogoElement = document.getElementById("lgenLogo");
if(typeof(lgenLogoElement) != 'undefined' && lgenLogoElement != null) {
  var lgenLogo = bodymovin.loadAnimation({
      container: document.getElementById('lgenLogo'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
  	  path: 'https://murrr-andrew.github.io/tyler/rc/animationJson/lgen.json'
  });
  document.getElementById('lgenLogo').addEventListener("mouseenter", function() {
      lgenLogo.play();
      document.getElementById("lgenLogo").classList.remove("colored");
  });
  lgenLogo.addEventListener("complete", function() {
      lgenLogo.stop();
      document.getElementById("lgenLogo").classList.add("colored");
  });
} 

var lflashLogoElement = document.getElementById("lflashLogo");
if(typeof(lflashLogoElement) != 'undefined' && lflashLogoElement != null) {
  var lflashLogo = bodymovin.loadAnimation({
      container: document.getElementById('lflashLogo'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
  	  path: 'https://murrr-andrew.github.io/tyler/rc/animationJson/lflash.json'
  });
  document.getElementById('lflashLogo').addEventListener("mouseenter", function() {
      lflashLogo.play();
      document.getElementById("lflashLogo").classList.remove("colored");
  });
  lflashLogo.addEventListener("complete", function() {
      lflashLogo.stop();
      document.getElementById("lflashLogo").classList.add("colored");
  });
} 

var oneofLogoElement = document.getElementById("oneofLogo");
if(typeof(oneofLogoElement) != 'undefined' && oneofLogoElement != null) {
  var oneofLogo = bodymovin.loadAnimation({
      container: document.getElementById('oneofLogo'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
  	  path: 'https://murrr-andrew.github.io/tyler/rc/animationJson/oneof.json'
  });
  document.getElementById('oneofLogo').addEventListener("mouseenter", function() {
      oneofLogo.play();
      document.getElementById("oneofLogo").classList.remove("colored");
  });
  oneofLogo.addEventListener("complete", function() {
      oneofLogo.stop();
      document.getElementById("oneofLogo").classList.add("colored");
  });
} 

var middleLogo = document.getElementById('prl');
if(typeof(middleLogo) != 'undefined' && middleLogo != null) {
	middleLogo.insertAdjacentHTML('afterbegin', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.39 75.35"><defs><style>.cls-1{fill:#fff;stroke:#231f20;stroke-miterlimit:10;stroke-width:1.5px;}.cls-2{fill:#f9b701;}</style></defs><g id="Слой_2" data-name="Слой 2"><g id="Layer_1" data-name="Layer 1"><rect class="cls-1" x="25.7" y="0.75" width="65.94" height="51.01" rx="6.79" ry="6.79"/><circle class="cls-1" cx="25.7" cy="25.08" r="9.52"/><path class="cls-1" d="M26.08,36.25s-8.82-1.7-13.54,3.53a25.86,25.86,0,0,0-6.2,10.49c-1.15,3-5.2,13.4-5.2,13.4s-1.59,4.67,1.67,6.25,5.38-3.35,5.38-3.35l5.23-13.36V74.6H38.69V53.17l4.85,8.12s3,6.08,7.4,1.14a127.84,127.84,0,0,0,9.61-13s2.3-4-.44-5.9c-3-2-5.82,1.32-5.82,1.32L48,53.35l-8.2-12.69S37,36,26.08,36.25Z"/><path class="cls-2" d="M48.2,26.32V37.14h8.42V29.21h4.47v7.93h8V26.32L58.67,18.25Zm21.38-6.27V14.51H65.17v2.14l-6.5-5L43.45,23.37l2.1,2.74L58.67,16,71.79,26.11l2.11-2.74Z"/></g></g></svg>');
} 
jQuery(document).ready(function($) {
    $("#prl").on("mouseenter", function() {
        if (! $("#prl").hasClass("go-animation")) {
          $(this).addClass("go-animation");
          setTimeout(function() {
              $("#prl").removeClass("go-animation");
          }, 3500);
        }
    });
    $("#cutom-home-logo-image").on("mouseenter", function() {
        if (! $("#cutom-home-logo-image").hasClass("go-animation")) {
          $(this).addClass("go-animation");
          setTimeout(function() {
              $("#cutom-home-logo-image").removeClass("go-animation");
          }, 3500);
        }
    });
});
$(document).ready(function() {
  $(".anchor").on("click", function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr("href")).offset().top - 80
    }, 1000);
  });
  $("#cutom-home-logo-image").on("mouseenter", function() {
      if (! $("#cutom-home-logo-image").hasClass("go-animation")) {
        $(this).addClass("go-animation");
        setTimeout(function() {
            $("#cutom-home-logo-image").removeClass("go-animation");
        }, 3500);
      }
  });
  window.onload = function () {
    $('.preloader').fadeOut(500, function(){ $('.preloader').remove(); } );
  }
});
