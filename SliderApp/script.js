//create objects
var models = [
  {
    name: "Cofee",
    image: "photos/screenshot_2.png",
    link: "https://unsplash.com/t/food-drink",
  },
  {
    name: "Donuts",
    image: "photos/screenshot_3.png",
    link: "https://unsplash.com/t/nature",
  },
  {
    name: "Milkshake",
    image: "photos/screenshot_4.png",
    link: "https://unsplash.com/t/architecture",
  },
  {
    name: "Orange Juice",
    image: "photos/screenshot_5.png",
    link: "https://unsplash.com/t/street-photography",
  },
  {
    name: "Pancakes",
    image: "photos/screenshot_6.png",
    link: "https://unsplash.com/t/travel",
  },
];

var index = 0;
var slideCount = models.length;
var interval;

var settings = {
  duration: "1000",
  random: true,
};
init(settings);

document.querySelector(".fa-arrow-circle-left").addEventListener("click", function () {
    index--;
    showSlide(index);
    // console.log(index);
  });
document.querySelector(".fa-arrow-circle-right").addEventListener("click", function () {
    index++;
    showSlide(index);
    // console.log(index);
  });

// if mouse enters arrows then ınterval will stop
document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});
document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
  });
});

function init(sett) {
  var prev;
  interval = setInterval(function () {
    if (settings.random) {
      // if settings.random is true this block setts random index
      do {

        index = Math.floor(Math.random() * slideCount);
      } while (index == prev);//checks prev number equals new number if equal creates new
      prev = index;
    } else {
      //if settings.random is false this block setts increase index
      if (slideCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      index++;
    }
    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  //first of all this block will check index number that is greater than model.length
  //or less than zero

  //assigns i variable to our global index
  index = i;
  if (i < 0) {
    index = slideCount - 1;
  }
  if (i >= slideCount) {
    index = 0;
  }
  //sets source attrıbute of card ımage photo in index number
  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);
  //sets the index number to the text property
  document.querySelector(".card-title").textContent = models[index].name;
  //sets the href attribute to the link property
  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
