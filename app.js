let mainPanel = document.getElementById('main')
let configPanel = document.getElementById('configPanel')
configPanel.style.visibility = 'hidden'

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
    if (configPanel.style.visibility === 'hidden') {
        configPanel.style.visibility = 'visible'
        mainPanel.style.marginRight = '240px'
    } else {
        configPanel.style.visibility = 'hidden'
        mainPanel.style.marginRight = '0'
    }
}

function drop (ev) {
    ev.preventDefault()
    let data = ev.dataTransfer.getData('text')
    /* If you use DOM manipulation functions, their default behaviour it not to
       copy but to alter and move elements. By appending a ".cloneNode(true)",
       you will not move the original element, but create a copy. */
    let draggedNode = document.getElementById(data).cloneNode(true)

    let nodeCopy = document.createElement('div')

    nodeCopy.id = data + "_" + Math.floor(Math.random() * Math.floor(100))/* We cannot use the same ID */

    let elementLabel = document.createElement('div')
    elementLabel.innerHTML = draggedNode.getAttribute('data-label')
    elementLabel.classList.add('element-label')

    let configButton = document.createElement('div')
    configButton.innerHTML = '<div class="config-button"><i class="fa fa-cog"></i></div>'
    configButton.addEventListener('click', openConfig)

    let removeButton = document.createElement('div')
    removeButton.innerHTML = '<div class="remove-button">X</div>'
    removeButton.addEventListener('click', removeElement)

    // //Creating element using elements module
    nodeCopy.innerHTML = Elements[draggedNode.getAttribute('data-type')]()

    nodeCopy.prepend(configButton)
    nodeCopy.prepend(removeButton)
    nodeCopy.prepend(elementLabel)

    ev.target.appendChild(nodeCopy)
}
