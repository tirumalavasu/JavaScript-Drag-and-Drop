var Elements = function () {

    const input = function () {
        return `
            <div id="input" class="form-group input draggable-element">
              <label for="inputElement">Input</label>
              <input type="text" class="form-control" id="inputElement" placeholder="Enter input">
              <small id="emailHelp" class="form-text text-muted">Hint</small>
            </div>
        `
    }

    const colMd12 = function () {
        return `
            <div id="col-md-12" class="col-md-12 draggable-element"></div>
        `
    }

    return {
        colMd12: colMd12,
        input: input
    }
}()