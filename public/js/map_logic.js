
function loadMap(x, y) {
    let map = L.map('map').setView([x, y], 15);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);
    let  divs_to_remove = document.querySelectorAll('.leaflet-control-attribution');
    divs_to_remove.forEach((div) => { div.parentNode.removeChild(div); });
}

window.onload = function() {
    loadMap(55.803474, 37.409846)
};