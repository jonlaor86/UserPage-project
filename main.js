
let apiManager = new ApiManager()
let renderer = new Renderer()



const loadData = function () {
    apiManager.loadData()
}
const renderData = function () {
    renderer.renderer(apiManager.getData())
}

