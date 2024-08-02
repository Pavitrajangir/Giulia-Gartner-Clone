function locoscroll(){
    gsap.registerPlugin(ScrollTrigger);
    
     const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
      multiplier:0.5,
      lerp:0.03,
});
    
     locoScroll.on("scroll", ScrollTrigger.update);
     ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
},
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
    
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
     
     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
     ScrollTrigger.refresh();
      
}

locoscroll()
    
    
var load=gsap.timeline()
    
    load.to(".loader",{
        y:"-150%",
       
        duration:2,
        ease:Expo.easeInOut,

},"#ok")
    
    load.from(".videoinside",{
        scale:0.2,
        opacity:0,
        duration:1.2,
        delay:-1,
})
    
    load.from(".elem>h1",{
        y:50,
        opacity:0,
        stagger:0.3,
      
},"#lol")
    
    load.from(".nav",{
        opacity:0,
},"#lol")


var imageone=document.querySelector(".imageone")

    imageone.addEventListener("mouseenter",function(){
    imageone.style.scale="2"
    imageone.style.transform="rotate(-10deg)"
})

    imageone.addEventListener("mouseleave",function(){
    imageone.style.scale="1"
    imageone.style.transform="rotate(0deg)"
})

var imagetwo=document.querySelector(".imagetwo")


    imagetwo.addEventListener("mouseenter",function(){
    imagetwo.style.scale="2"
    imagetwo.style.transform="rotate(10deg)"
})

    imagetwo.addEventListener("mouseleave",function(){
    imagetwo.style.scale="1"
    imagetwo.style.transform="rotate(0deg)"
})

var imagethree=document.querySelector(".imagethree")

    imagethree.addEventListener("mouseenter",function(){
    imagethree.style.scale="2"
    imagethree.style.transform="rotate(-10deg)"
})

    imagethree.addEventListener("mouseleave",function(){
    imagethree.style.scale="1"
    imagethree.style.transform="rotate(0deg)"
})


gsap.from(".oldleft",{
    x:700,
    rotate:0,
    scrollTrigger:{
    scroller:".main",
    start:"top 80%",
    end:"top -60%",
    trigger:".oldleft", 
    scrub:2,
    }
})
  
gsap.from(".oldright",{
    x:-700,
    rotate:0,
    scrollTrigger:{
    scroller:".main",
    start:"top 80%",
    end:"top -60%",
    trigger:".oldright",  
    scrub:2,
    }
})


gsap.to(".pagethree",{
    scrollTrigger:{
      scroller:".main",
      start:"top 10%",
      end:"top -100%",
      trigger:".pagethree",
      pin:true,
      scrub:2,
    }
})

gsap.from(".newleft",{
    x:700,
    rotate:0,
    scrollTrigger:{
    scroller:".main",
    start:"top 160%",
    end:"top -60%",
    trigger:".newleft", 
    scrub:2,
    }
})
  
gsap.from(".newright",{
    x:-700,
    rotate:0,
    scrollTrigger:{
    scroller:".main",
    start:"top 160%",
    end:"top -60%",
    trigger:".newright",  
    scrub:2,
    }
})

gsap.to(".pagethreenew",{
    scrollTrigger:{
      scroller:".main",
      start:"top 10%",
      end:"top -100%",
      trigger:".pagethreenew",
      pin:true,
      scrub:2,
    }
})


gsap.to(".pagefive>h1",{
    x:"-125%",
    scrollTrigger:{
      scroller:".main",
      trigger:".pagefive",
      start:"top 35%",
      end:"top -80%",
      pin:".pagefive",
      scrub:3,
      
    }
})
  
  gsap.to(".pagesix>h1",{
    x:"300%",
    scrollTrigger:{
      scroller:".main",
      trigger:".pagesix",
      start:"top 35%",
      end:"top -50%",
      pin:".pagesix",
      scrub:3,
    }
})
  
  gsap.to(".pageseven>h1",{
    x:"-125%",
    scrollTrigger:{
      scroller:".main",
      trigger:".pageseven",
      start:"top 35%",
      end:"top -80%",
      pin:".pageseven",
      scrub:3,
    }
})
  
  gsap.to(".pageeight>h1",{
    x:"150%",
    scrollTrigger:{
      scroller:".main",
      trigger:".pageeight",
      start:"top 35%",
      end:"top -50%",
      pin:".pageeight",
      scrub:3,
    }
})
  
  gsap.to(".pagenine>h1",{
    x:"-180%",
    scrollTrigger:{
      scroller:".main",
      trigger:".pagenine",
      start:"top 35%",
      end:"top -80%",
      pin:".pagenine",
      scrub:3, 
    }
})
  
  gsap.to(".pageten>h1",{
    x:"150%",
    scrollTrigger:{
      scroller:".main",
      trigger:".pageten",
      start:"top 35%",
      end:"top -80%",
      pin:".pageten",
      scrub:3,
    }
})
  
  gsap.to(".pageeleven>h1",{
    scale:50,
    scrollTrigger:{
      scroller:".main",
      trigger:".pageeleven",
      start:"top 0%",
      end:"top -100%",
      scrub:2,
      pin:".pageeleven",
    }
})
  
  gsap.to(".pageeleven",{
    backgroundColor:"white",
    scrollTrigger:{
      scroller:".main",
      trigger:".pageeleven",
      start:"top 0%",
      end:"top -50%",
      scrub:2,
    }
  
})

gsap.to(".pagetwele",{
    backgroundColor:"white",
    scrollTrigger:{
      scroller:".main",
      trigger:".pagetwele",
      start:"top 0%",
      end:"top -300%",
      scrub:true,
    }
})

gsap.to(".pagetwele",{
    backgroundColor:"rgb(18,20,22)",
    scrollTrigger:{
      scroller:".main",
      trigger:".pagetwele",
      start:"top -500%",
      end:"top -600%",
      scrub:true, 
    }
})
  
  gsap.to(".imgone",{
    scrollTrigger:{
      scroller:".main",
      trigger:".pagetwele",
      start:"top 0%",
      end:"top -500%",
      scrub:2,
      pin:".imgone",
    }
  
})
  
  gsap.to(".imgtwo",{
    rotate:-15,
    scrollTrigger:{
      scroller:".main",
      trigger:".imgtwo",
      start:"top 10%",
      end:"top -400%",
      scrub:2,
      pin:true,
    }
})
  
  gsap.to(".imgthree",{
    rotate:15,
    scrollTrigger:{
      scroller:".main",
      trigger:".imgthree",
      start:"top 10%",
      end:"top -300%",
      scrub:2,
      pin:true,
    }
})

  gsap.to(".imgfour",{
    rotate:-15,
    x:-1100,
    scrollTrigger:{
      scroller:".main",
      trigger:".imgfour",
      start:"top 10%",
      end:"top -200%",
      scrub:2,
      pin:true,
    }
})

gsap.to(".imgfive",{
    rotate:15, 
    x:1100,
    scrollTrigger:{
      scroller:".main",
      trigger:".imgfive",
      start:"top 10%",
      end:"top -100%",
      scrub:2,
      pin:true,
    }
})
  
gsap.to(".mask",{
    '-webkit-mask-size': '4500px',
    scrollTrigger:{
      scroller:".main",
      trigger:".pagethirteen",
      start:"top 0%",
      end:"top -200%",
      scrub:true,
      pin:".pagethirteen",
    }
})

  gsap.to(".masktwo",{
    '-webkit-mask-size': '4500px',

    scrollTrigger:{
      scroller:".main",
      trigger:".pagefourteen",
      start:"top 0%",
      end:"top -200%",
      scrub:true,
      pin:".pagefourteen",
    }
})

  gsap.to(".maskthree",{
    '-webkit-mask-size': '4500px',

    scrollTrigger:{
      scroller:".main",
      trigger:".pagefiveteen",
      start:"top 0%",
      end:"top -200%",
      scrub:true,
      pin:".pagefiveteen",
    }
})

gsap.to(".smilefirst",{
    x:"-600",
    y:"-300",
    rotate:180,
    scrollTrigger:{
    scroller:".main",
    trigger:".lastpage",
    start:"top 60%",
    end:"top 0%",
    scrub:true,
    }
})

  gsap.to(".smilesecond",{
    x:"600",
    y:"-300",
    rotate:180,
    scrollTrigger:{
      scroller:".main",
      trigger:".lastpage",
      start:"top 60%",
      end:"top 0%",
      scrub:true,
    }
})

