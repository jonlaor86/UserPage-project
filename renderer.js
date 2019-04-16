class Renderer {

    rendererUsers (user) {
        $(".user-container").text()
        var source = $("#user-template").html()
        var template = Handlebars.compile(source)
        var newHTML   = template(user)
        $ (".user-container").append(newHTML)
    }

    rendererFriends  (friends) {
        $(".friends-container").text()
        var source = $("#user-friends-template").html()
        var template = Handlebars.compile(source)
        var newHTML = template (friends)
        $(".friends-container").append(newHTML)
    }

    rendererPokemon  (pokemon) {
        $(".pokemon-container").text()
        var source = $("#pokemon-template").html()
        var template = Handlebars.compile(source)
        var newHTML = template(pokemon)
        $(".pokemon-container").append(newHTML)
    }

    rendererMeat (text) {
        $(".meat-container").text()
        var source = $("#meat-template").html()
        var template = Handlebars.compile(source)
        var newHTML = template(text)
        $(".meat-container").append(newHTML)
       }

       rendererQuote (author){
           $(".quote-container").text()
        var source = $("quote-template").html
        var template = Handlebars.compile(source)
        var newHTML = template(author)
       }


       renderer= (data) => {
        this.rendererUsers(data.user) 
        this.rendererFriends(data.friends)
        this.rendererPokemon (data.pokemon)
        this.rendererMeat (data.text)
        this.rendererQuote (data.author)
       }


}