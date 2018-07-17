var Elements = function () {

    const input = function () {
        return `
            <div>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
        `
    }

    return {
        input: input
    }
}()