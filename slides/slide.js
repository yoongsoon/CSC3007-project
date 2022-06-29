
const SLIDE_COUNT = 20;

function createSlides(){

    for (var i =0; i < SLIDE_COUNT ; i++){

    var slideshow = document.getElementById("slideshow");

      // create a new div element
    const newDiv = document.createElement("div");
    newDiv.classList.add("carousel-item");
    if (i== 0 ){
        newDiv.classList.add("active");
    }

    const newDiv2 = document.createElement("div");
    newDiv2.classList.add("d-flex", "align-items-center", "justify-content-center", "min-vh-100");

    var img = document.createElement('img');

    // Show the gif for Slide #17
    if (i == 17){
        img.setAttribute("src", "slide" + String(i) + ".gif");
        img.setAttribute("height", "750");
        img.setAttribute("width", "1080px");

    }else{
        img.setAttribute("src", "slide" + String(i) + ".png");
    }

    newDiv2.appendChild(img);
    newDiv.appendChild(newDiv2);
    slideshow.appendChild(newDiv);
    }
}

createSlides();


