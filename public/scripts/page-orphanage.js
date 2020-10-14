const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWhellZoom: false
}

//create map
const map = L.map('mapid').setView([-27.2211324,-49.6501464], 15)

//create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})

//create and add marker
L.marker([-27.2211324,-49.6501464],{icon: icon})
.addTo(map)

/*image gallery*/
function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes active when
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove("active")
    })

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de imagem
    imageContainer.src = image.src

    //adicionar a classe .active para este botao
    button.classList.add('active')
}
    