/* 
 * This script will create a carousel to rotate a series of images
 * their alt values and captions in the web page.
 */

//Stores the two HTML elements to be worked with into
//JavaScript variables
var mainImage = document.getElementById("mainImage");
var mainImageCaption = document.getElementById("mainImageCaption");

//two arrays for storing images and description text
var imageArray = ["images/clavemelt.jpg", "images/incinerator.jpg", "images/medwaste.jpg", 
    "images/shredpile.jpg", "images/syringes.jpg"];

var captionArray = ["Waste after it has been treated in the autoclave", "Icinerator burning waste", 
    "Gloves after the operation", "Paper shreddings pile", "Used syringes"];
 

//variables to indicate which items in the arrays to start with
var imageIndex = 1;
var captionIndex = 1;

//The function to change the HTML markup with the items in the arrays
function changeImage() {
  mainImage.setAttribute("src", imageArray[imageIndex]);
  mainImage.setAttribute("alt", captionArray[captionIndex]);
  mainImageCaption.innerHTML = captionArray[captionIndex];
  imageIndex++;
  captionIndex++;
  if (imageIndex >= imageArray.length) {
    imageIndex = 0;
    captionIndex = 0;
  }
}
//100 miliseconds = 1 second
//rotate the image using the function every 5 seconds
var rotateAction = setInterval(changeImage, 5000);

//clear interval stops the rotation from happening
mainImage.onmouseover = function( ) {
  clearInterval(rotateAction);
};

//restarts the rotation from where it was previously
mainImage.onmouseout = function( ) {
  rotateAction = setInterval(changeImage,5000);
};