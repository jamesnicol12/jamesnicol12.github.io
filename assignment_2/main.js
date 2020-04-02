const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
const arr = [1,2,3,4,5];
arr.forEach((i) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src','images/pic'+i+ '.jpg')
    thumbBar.appendChild(newImage);
    newImage.onclick = function(x){
        displayedImage.src = x.target.src; 
    }
})
/* 
Image Sources:
pic1 - www.brittanytourism.com
pic2 - https://www.worldwildlife.org/species/giant-panda
pic3 - https://www.worldwildlife.org/species/tiger
pic4 - https://www.mypetwarehouse.com.au/my-pet-blog/expert-pet-advice/can-dogs-eat-raw-eggs
pic5 - https://en.wikipedia.org/wiki/File:Fernando_noronha.jpg

*/
                                
/* Wiring up the Darken/Lighten button */  
/*MDN source used for base code*/
  btn.onclick = function () {
    clickme();
  }
  function clickme() {
    if (btn.className === "dark") {
      btn.setAttribute("class", "light");
      btn.innerHTML = "Lighten";
      overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else {
      btn.setAttribute("class", "dark");
      btn.innerHTML = "Darken";
      overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
  };
