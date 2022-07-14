const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const buttonList = $$(".pricing-button"); 
// const priceList = $$(".pricing-price"); 

function handleMouseEnter() {
  // console.log(this.parentElement.querySelector('.pricing-price'))
  const price = this.parentElement.children[0];
  price.classList.add("active");
}

function handleMouseLeave() {
  const price = this.parentElement.children[0];
  price.classList.remove("active");
}

buttonList.forEach(function (btn) {
  btn.onmouseenter = handleMouseEnter;
  btn.onmouseleave = handleMouseLeave;
});

// const activeClass = "active";

// button.addEventListener("mouseover", function(){
//     price.classList.add(activeClass);
//     namevalue.classList.add(activeClass);
// });

// button.addEventListener("mouseout", function(){

// });
