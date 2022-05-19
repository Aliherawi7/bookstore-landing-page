
// loading template
window.setTimeout(loading, 800);
function loading(){
    document.getElementsByClassName('loading-container')[0].classList.add(('loaded'));
}

//  end laoding

// dark mode 
    let dark_btn = document.getElementById('darkmode');
    dark_btn.addEventListener('click', function(){
        let mybody = document.querySelector('body');
        mybody.classList.toggle('dark');
        if(mybody.classList.contains('dark')){
            dark_btn.innerHTML = '<span class="fa fa-sun-o myhover">light</span>'
        }else{
            dark_btn.innerHTML = '<span class="fa fa-moon-o myhover">dark</span>'
        }

    })
// end dark mode

// scroll top button
let scrollTop = document.querySelector('.scroll-top');
window.addEventListener('scroll', function(){
    if(scrollY > window.screenY){
        scrollTop.style.visibility = 'visible';
        scrollTop.style.opacity = '1';
    }else{
        scrollTop.style.visibility = 'hidden';
        scrollTop.style.opacity = '0';
    }
}, false);
scrollTop.addEventListener('click', function(){
    scrollTo(0,0);
},false);


// slider
    let btn_prev = document.getElementById('prev');
    let btn_next = document.getElementById('next');

    let slider0 = {
        content : document.getElementById('content1'),
        sliderImage : document.getElementById('sliderImg1'),
        sliderSub : document.getElementById("sliderSub1"),
        sliderTit : document.getElementById("sliderTit1")
    }
    let slider1 = {
        content : document.getElementById('content2'),
        sliderImage : document.getElementById('sliderImg2'),
        sliderSub : document.getElementById("sliderSub2"),
        sliderTit : document.getElementById("sliderTit2")
    }

    let counterObject = 0;
    let images = [{image:'a', sub:"Historian", title:"Afghans unfinished war history"},
                {image:'b', sub:"Computer", title:"New  Connection layer with React.js"},
                {image:'c', sub:"Historian", title:"Herat calture and foods"},
                {image:'d', sub:"Socail", title:"How to keep calm by reading"},
                {image:'e', sub:"Historian", title:"Pre Islamic world"},
                {image:'f', sub:"Computer", title:"how to learn javascript fast"},];

    // auto fire function
    let interval;
    (function(){
    interval =  window.setInterval(next,4000);
    }());

    function next(){
        if(counterObject == images.length-1){
            counterObject =0;
        }
        counterObject++;
        clearInterval(interval); // clear auto sliding
        go(counterObject);
        // after clicking the next button the auto sliding will start again
        interval = window.setInterval(next, 4000);
    }
    function prev(){
        if(counterObject == -1){
            counterObject =images.length;
        }
        counterObject--;
        clearInterval(interval); // clear auto sliding
        go(counterObject);
        // after clicking the next button the auto sliding will start again
        interval = window.setInterval(next, 4000);
    }

    function go(counterObj){ 

        if(counterObj % 2 ==0){
            slider0.content.style.opacity = '0';
            slider1.content.style.opacity = '1';
            slider1.sliderImage.style.backgroundImage = 'url("image/'+images[counterObj].image+'.jpg")';
            slider1.sliderImage.style.opacity = "1";
            slider1.sliderSub.innerHTML = images[counterObj].sub;
            slider1.sliderTit.innerHTML = images[counterObj].title;
        }else{
            slider1.content.style.opacity = '0';
            slider0.content.style.opacity = '1';
            slider0.sliderImage.style.backgroundImage = 'url("image/'+images[counterObj].image+'.jpg")';
            slider0.sliderImage.style.opacity = "1";
            slider0.sliderSub.innerHTML = images[counterObj].sub;
            slider0.sliderTit.innerHTML = images[counterObj].title;
        }
    }

    btn_next.addEventListener('click', next, false);       
    btn_prev.addEventListener('click', prev, false); 

// end slider


 


// login modal 
let btnLogin = document.getElementById('login');
let btnSignup = document.getElementById('btnsignup');
let signupModal = document.getElementById('signup');
let modal = document.getElementsByClassName('modal')[0];
let closeLogin = document.getElementsByClassName('btn-close')[0];
let closeSignup = document.getElementById('closeSignup');

closeLogin.addEventListener('click', function(){
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';
},false);

btnLogin.addEventListener('click', function(){
    modal.style.opacity = '1';
    modal.style.visibility = 'visible'
})

btnsignup.addEventListener('click', function(){
    signupModal.style.opacity = '1';
    signupModal.style.visibility = 'visible'
},false);

closeSignup.addEventListener('click', function(){
    signupModal.style.opacity = '0';
    signupModal.style.visibility = 'hidden';
},false);