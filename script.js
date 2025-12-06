const models = document.querySelectorAll('.model');
let activeIndex = 0;

function showNextModel() {
   
  models[activeIndex].classList.remove('active');
  
    activeIndex = (activeIndex + 1) % models.length;
  
  
  models[activeIndex].classList.add('active');
}

setInterval(showNextModel, 3000);
