var frameImgs = document.getElementsByClassName('frame-clickable');
var backdrop = document.getElementById('frame-backdrop');

var handleImgClick = function() {
    var newClass = this.zoomed ? 'minimized-frame' : 'zoomed-frame';
    frameImgs[0].className = 'frame-clickable' + ' ' + newClass;
    backdrop.className = this.zoomed ? 'modal' : '';
    this.zoomed = !this.zoomed
}

this.zoomed = false;
for (var i = 0; i < frameImgs.length; i++) {
    frameImgs[i].addEventListener('click', handleImgClick.bind(this))
}
