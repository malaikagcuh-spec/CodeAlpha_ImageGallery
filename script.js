
const images = document.querySelectorAll(".Gallery img");
const lightbox = document.getElementById("lightbox");
const bigImage = document.getElementById("bigImage");

let currentIndex = 0;

//open image
images.forEach(function(image, index) {
    image.onclick = function(){
        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";
    };
});
// show selected image
function showImage(){
    bigImage.src = images[currentIndex].src;
}
// Next button
document.getElementById("next").onclick = function(){
    currentIndex++;
    if (currentIndex >= images.length){
        currentIndex = 0;
    }
    showImage();
};
// previous button
document.getElementById("prev").onclick = function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage();
};
// close button
document.getElementById("close").onclick = function() {
    lightbox.style.display = "none";
};