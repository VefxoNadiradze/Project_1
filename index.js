let burger = document.querySelector('.hamburger');
let navLinks = document.querySelector('.nav-links-par');
let close = document.querySelector('.close');
let backDrop = document.querySelector('.backdrop');
let scrollUp = document.querySelector('.scroll-up');


burger.addEventListener('click', function(){
     navLinks.classList.toggle('active');
     backDrop.classList.toggle('active');
})

close.addEventListener('click', function(){
     navLinks.classList.toggle('active');
     backDrop.classList.toggle('active');
})


window.addEventListener('scroll', function(){
      scrolled = this.scrollY;

      if(scrolled > 70){
           scrollUp.style.opacity = 1;
           scrollUp.style.visibility = 'visible';
           scrollUp.style.right = '25px';
      }else{
          scrollUp.style.opacity = 0;
          scrollUp.style.visibility = 'hidden';
          scrollUp.style.right = '-25px';
      }
})