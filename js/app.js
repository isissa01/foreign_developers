$(document).ready(() =>{
  let options = {
  strings: ["^100 the people that need them.^1000", "businesses and individuals."],
  typeSpeed: 60,
  loop: true,
  loopCount: false
}



  let typed = new Typed(".type", options);
  let header_anim = new Typed("h1.display-1", {
    strings:["Foreign Developers"],
    typeSpeed: 50
  });
  $("h1.display-1").next('.typed-cursor').remove();

  
  
  $(".down-arrow").click(function(event){
    event.preventDefault();
    
    let link = $(this).children("a").first().attr("href");
    console.log(link);
   $("html, body").animate({
     scrollTop: $(link).offset().top
   }, 1000);
    
    
    return false;
  });
  
});



