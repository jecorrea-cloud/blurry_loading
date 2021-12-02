//Variables
const bg = document.querySelector(".bg");
const loadText = document.querySelector(".loading-text");

let load = 0;

// increment the load value every 30 milisecs
let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) clearInterval(int);

  //   console.log(load);

  //Line 18 increases the num up to 100
  loadText.innerText = `${load}%`;

  //Line 21 maps the range of load to the range of the opacity
  loadText.style.opacity = scale(load, 0, 100, 1, 0);

  //Line 24 maps the range of load to the range of bg's opacity
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// scale() is a helper function that lets one range of num to be mapped to an existing range of numbers
//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
