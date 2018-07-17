(function () {
    "use strict"
    let app = document.getElementById('app')
    let layout = document.createElement('div')
    layout.innerHTML = `        
        <div class="container-fluid">
	        <div class="row">
		        <div class="col-md-6">
		            <h1>Elements</h1>
		            <div class="jumbotron"></div>
		        </div>
		        <div class="col-md-6">
		            <h1>Preview</h1>
		            <div class="jumbotron"></div>
		        </div>
		    </div>
		</div>
    `
    app.appendChild(layout)

    let loader = document.createElement('div')
    loader.innerHTML = `
        <div class="lds-css ng-scope"><div style="width:100%;height:100%;display:none" id="loader" class="lds-ball"><div></div></div>
    `

    function init () {
        // alert('Still Loading!!!')
        console.log('loading')
        console.log(new Date())
        app.appendChild(loader)
    }

    function initOnCompleteLoad () {
        // alert('Loaded!')
        console.log('loaded')
        console.log(new Date())
        app.removeChild(loader)
    }

    // On document ready
    document.onreadystatechange = function () {
        let state = document.readyState;
        if (state === 'interactive') {
            setTimeout(function () {
                init()
            }, 3000)
        } else if (state === 'complete') {
            initOnCompleteLoad()
        }
    }

})()