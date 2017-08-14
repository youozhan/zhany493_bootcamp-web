//This is the array of images


var images = ["0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg"
];

document.addEventListener("DOMContentLoaded", function(event) {
    //Checking if the js file is linked html
    //Calling the function

    loadImages();
});

var imgSwitch = 0;

function loadImages() {
    var columns = document.getElementsByClassName("column");
    var columnNum = columns.length;

    //putInNum means which column the next image will be put into

    var putInNum = 0;

    //check the number of images and the number of columns

    console.log("Number of images: " + images.length);
    console.log("Number of columns: " + columns.length);

    //use a for loop to put all the images into columns

    for (var i = 0; i < images.length; i++) {
        var newImg = document.createElement("img"); //there is a bug here
        newImg.className = "images";

        newImg.src = "./image/" + images[i];

        //ID is for the click event to track which image it is

        newImg.id = i;

        //can't use i here, must use id of the image
        //because if using i, it will always be the last index of arrary when the window is

        newImg.addEventListener("click", function(event) {
            popUp(event.target.id);
            imgSwitch = event.target.id;
        });

        //put the new <img> tag into the column[putInNum]
        columns[putInNum].appendChild(newImg);

        //move to the next column
        putInNum++;

        //if putInNum is bigger than the number of columns, put the next image in the first column
        //why -1?
        //because the index of array starts from 0

        if (putInNum > columnNum - 1) {
            putInNum = 0;
        }
    }
}

function popUp(imgCount) {
    imgSwitch = imgCount;

    var popup = document.getElementById("popup");
    var img = document.getElementById("pic");
    var imgContainer = document.getElementById("pic-container");

    popup.style.zIndex = "1";
    popup.style.display = "block";

    imgContainer.addEventListener("click", function(event) {
        close();
    });

    img.src = "./image/" + images[imgCount];
}

function close() {
    var popup = document.getElementById("popup");
    popup.style.zIndex = "-1";
    popup.style.display = "none";
}

function change(direction) {
    var numOfImg = images.length;
    var next = 0;
    var img = document.getElementById("pic");

    //if direction is 1, switch to the right

    if (direction == 1) {
        if (imgSwitch > numOfImg - 2) {
            next = 0;
        } else {
            imgSwitch++;
            next = imgSwitch;
        }
    } else if (direction == -1) {
        if (imgSwitch - 1 < 0) {
            next = numOfImg - 1;
        } else {
            next = imgSwitch - 1;
        }

    }
    img.src = "./image/" + images[next];
    imgSwitch = next;

}