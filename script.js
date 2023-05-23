let imageContainer = document.getElementById("imageContainer")
let enlargedImg = document.getElementById("enlargedImg")
let closeBtn = document.getElementById("closeBtn")

let albumImg = document.getElementById("albumImg");
let albumImg2 = document.getElementById("albumImg2");
let albumImg3 = document.getElementById("albumImg3");

albumImg.addEventListener('click', function() {
    enlargedImg.src = albumImg.src;
    imageContainer.style.display = 'flex';
});

albumImg2.addEventListener('click', function() {
    enlargedImg.src = albumImg2.src;
    imageContainer.style.display = 'flex';
});

albumImg3.addEventListener('click', function() {
    enlargedImg.src = albumImg3.src;
    imageContainer.style.display = 'flex';
});
closeBtn.addEventListener('click', function() {
    imageContainer.style.display = 'none';
});