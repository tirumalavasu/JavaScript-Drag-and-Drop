(function () {
    "use strict"
    let app = document.getElementById('app')
    let layout = document.createElement('div')
    layout.innerHTML = `        
        <div class="container-fluid">
	        <div class="row">
		        <div class="col-md-6">
		            <h1>Elements</h1>
		            <div class="jumbotron" id="elements"></div>
		        </div>
		        <div class="col-md-6">
		            <h1>Preview</h1>
		            <div class="jumbotron" id="preview"></div>
		        </div>
		    </div>
		</div>
    `
    app.appendChild(layout)

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }

    let elementsPanel = document.getElementById('elements')
    let elements = document.createElement('div')
    elements.setAttribute('draggable', 'true')
    elements.addEventListener('ondragstart', drag)
    elements.innerHTML = `
        <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">${Elements.input()}</div>
    `
    elementsPanel.appendChild(elements)

    let previewPanel = document.getElementById('preview')
    let preview = document.createElement('div')
    preview.setAttribute('draggable', 'true')
    preview.addEventListener('ondrop', drop)
    preview.addEventListener('ondragover', allowDrop)
    preview.innerHTML = `
        <div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
    `
    previewPanel.appendChild(preview)

})()
