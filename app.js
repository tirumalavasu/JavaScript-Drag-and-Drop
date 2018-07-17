function allowDrop (ev) {
    ev.preventDefault()
}

function drag (ev) {
    ev.dataTransfer.setData('text', ev.target.id)
}

function removeElement (e) {
    document.getElementById(e.target.parentNode.parentNode.id).remove()
}

function openConfig (e) {
    // console.log(e.target.parentNode.parentNode.parentNode.id)
    let eleId = e.target.parentNode.parentNode.parentNode.id.split('_')[0]
    console.log(eleId)
}

function drop (ev) {
    ev.preventDefault()
    let data = ev.dataTransfer.getData('text')
    /* If you use DOM manipulation functions, their default behaviour it not to
       copy but to alter and move elements. By appending a ".cloneNode(true)",
       you will not move the original element, but create a copy. */
    let nodeCopy = document.getElementById(data).cloneNode(true)
    nodeCopy.id = data + "_" + Math.floor(Math.random() * Math.floor(100))/* We cannot use the same ID */

    let configButton = document.createElement('div')
    configButton.innerHTML = '<div class="config-button"><i class="fa fa-cog"></i></div>'
    configButton.addEventListener('click', openConfig)
    nodeCopy.prepend(configButton)

    let removeButton = document.createElement('div')
    removeButton.innerHTML = '<div class="remove-button">X</div>'
    removeButton.addEventListener('click', removeElement)
    nodeCopy.prepend(removeButton)

    ev.target.appendChild(nodeCopy)
}
