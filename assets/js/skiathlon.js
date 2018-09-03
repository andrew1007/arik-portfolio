var frameImgs = document.getElementsByClassName('frame-clickable');
var imgContainer = document.getElementsByClassName('modal-img-container');
var bodyTag = document.getElementsByTagName('body')
var closeButton = document.getElementById('frame-close-button')

closeButton.style.top = '20px'
var handleImgClick = function() {
    var newClass = this.zoomed ? 'minimized-frame' : 'zoomed-frame';
    frameImgs[0].className = 'frame-clickable' + ' ' + newClass;
    bodyTag[0].style.overflow = !this.zoomed ? 'hidden': 'auto'
    imgContainer[0].style.width = this.zoomed ? '0vw' : '100vw'
    this.zoomed = !this.zoomed
}

this.zoomed = false;
for (var i = 0; i < frameImgs.length; i++) {
    frameImgs[i].addEventListener('click', handleImgClick.bind(this))
}

closeButton.addEventListener('click', handleImgClick.bind(this))