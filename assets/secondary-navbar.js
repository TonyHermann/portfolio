document.addEventListener('DOMContentLoaded', function() {

    SecondaryScrollBar();
    Sticky();
    start();
    Hamburguer();
    setAnimations();

});

function start() {
  if(window.innerWidth > 1024) {
    const nav_buttons = document.querySelectorAll('.buttonNavbarA');
  nav_buttons.forEach((button)=> {
    if(button.id === "1n") {
      button.addEventListener('click', function(){

        NavBar(0)
        header.classList.replace('animate__bounceInUp', 'animate__bounceInDown');
        setTimeout(MainpageAnimations('in'), 1500 );
      });
    } else {

      button.addEventListener('click', function(){
        let x = button.parentElement.id.charAt(0);
        let y = parseInt(x);
        setTimeout(MainpageAnimations('out'), 1500 );
        NavBar(y-1);
      });
    }
  });
  }

}

 function NavBar(i) {
  const nav_buttons = document.querySelectorAll('.buttonNavbarA');

  let index = i + 1;
  let indexx = index.toString().concat("n");

  const anterior = document.getElementsByClassName('selectedN')[0];
  anterior.classList.remove('selected');
  anterior.classList.remove('selectedN');

  const button = document.getElementById(indexx);

  button.classList.add('selected');
  button.classList.add('selectedN');
}

let SecondaryScrollBar = ()=> {
    function resetSelection() {
        for (var i = 0; i < navigation.children.length; i++) {
          navigation.children[i].classList.remove('selected');
        }
      }
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    let navigation = document.querySelector('.secondary-navbar');

    try {

        sections.forEach(function(section, i){

            navigation.children[i].addEventListener('click', ()=> {

              let lala = i + 1;

              if(!navigation.children[0].classList.contains('selected')) {
                setTimeout(MainpageAnimations('in'), 1500 );

              } else {
                setTimeout(function() {
                  MainpageAnimations('out');

                }, 50);
              }
              window.location.href = "/portfolio/#" + lala;
              NavBar(i)
              navigation.children[i].classList.add('selected');

          })
      });

    } catch (error) {

    }
    window.addEventListener('scroll', ()=>{
        const scrollTop = window.scrollY;
        sections.forEach(function(section, i){
            if (section.offsetTop <  scrollTop + windowHeight/2 && scrollTop < section.offsetTop + windowHeight/2) {
                resetSelection();
                NavBar(i);
                navigation.children[i].classList.add('selected');
              };

        });
    });

}

let Sticky = ()=> {

  if(window.innerWidth > 1024) {

    window.addEventListener('scroll', function(){
      const header = document.querySelector('header');
      header.classList.toggle('bottom', window.scrollY > 720);

      if(window.scrollY>=400) {
        MainpageAnimations('out');
        header.classList.add('animate__animated', 'animate__bounceInUp');
      }

      if(window.scrollY<=310) {
        MainpageAnimations('in');

      }

      if(window.scrollY<=350) {
        MainpageAnimations('in');
        header.classList.replace('animate__bounceInUp', 'animate__bounceInDown');
      }
  });
  }

}

let MainpageAnimations = (type)=> {
  const phone = document.querySelector('.phone-svg');
  const tablet = document.querySelector('.tablet-svg');
  const tony = document.querySelector('h1');
  const tonyNav = document.querySelector('#logo-tony');
  if(type === 'out') {

      phone.style.transform = 'translateY(-8vh)';
      phone.style.opacity = '0';


      tablet.style.transform = 'translateY(60rem)';
      tablet.style.opacity = '0';

      tony.style.transform = 'scale(1.5)';
      tony.style.transform = 'translate3d(-100vh, 100vh, 0.1rem)';
      tony.style.opacity = '0';

  } else {

    phone.style.transform = 'translate3d(18vh, 8vh, 0vh)';
    phone.style.opacity = '100';


    if(window.innerWidth <= 1024) {
      tablet.style.transform = 'translate3d(-12vh, 0vh, 0vh)';
    } else {
      tablet.style.transform = 'translate3d(-21vh, 0vh, 0vh)';

    }

    tablet.style.opacity = '100';



    tony.style.transform = 'scale(1)';
    tony.style.transform = 'translate3d(0vh, 0vh, 0rem)';
    tony.style.opacity = '100';

  }
}

let setAnimations = ()=> {
  const skills_pN_button = document.querySelector('.skills_button');
  skills_pN_button.addEventListener('click', ()=> {
    addAnimations('skill', "animate__bounceIn")
  });
  //Skills secondary navbar button
  const skills_sN_button = document.querySelector('#skills');
  skills_sN_button.addEventListener('click', ()=> {
    addAnimations('skill', "animate__bounceIn")
  });
}

let addAnimations = (thing, animation)=> {
  const thingToBeAnimated = document.querySelectorAll('.' + thing + '');
    thingToBeAnimated.forEach(function(x) {
      x.classList.add('animate__animated');
      x.classList.add(animation)
      x.classList.add('animate__delay-1s');
    });
}

let Hamburguer = ()=> {
  const ham = document.querySelector('#hamburguer');
  const buttonsDiv = document.querySelector('.buttonsX');
  ham.addEventListener('click', function(){
    buttonsDiv.classList.toggle('selected');
  });
  let buttons = document.querySelector('#buttonsX');
  let liX = buttons.childNodes;
  liX.forEach(function(x) {

    let y = x.firstChild;
    y.addEventListener('click', function(){
      buttonsDiv.classList.toggle('selected');
    })
    });


}
