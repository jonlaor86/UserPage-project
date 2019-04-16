class ApiManager {
    constructor (){
        this.data = {}
}
    getData(){
        return this.data
    }

    randomUserAPI() {
        $.ajax({
            url: 'https://randomuser.me/api/',
            method: "GET",
            success: result => {
                this.data.user = {
                    picture: result.results[0].picture.large,
                    firstName: result.results[0].name.first,
                    lastName: result.results[0].name.last,
                    city: result.results[0].location.city,
                    state: result.results[0].location.state
                }
            }
        });
    }

    randomFriendsAPI (){
        $.ajax({
            method:"GET",
            url:"https://randomuser.me/api/?results=6",
            success: (results) => {
                this.data.freinds = results.results.map(r => {return {firstName: r.name.first, LastName: r.name.last}})
            }
        })
    }

    randomQuoteAPI (){
        $.ajax({
            method: "GET",
            url:"https://quotes.rest/qod" ,
            success: (response) => {
                let quoteData = response.contents.quotes[0]
            this.data.quote = {
                text: quoteData.quote,
                author: quoteData.author 
            }
        }
        })
        }
    

    randomPokemonAPI() {
        let id =  Math.floor(Math.random() * (808 - 1))
        $.ajax({
            method: "GET",
            url: 'https://pokeapi.co/api/v2/pokemon/' + id,
            success: (result) => {
                this.data.pokemon = {
                    picture: result.sprites["front_default"],
                    name: result.name
                }
            }}
        )}

        randomMeatAPI() {
          $.ajax ({
              method:"GET",
              url: "https://baconipsum.com/api/?type=all-meat",
              success: (results) => {
                  this.data.meat = results[0]

              }
          })  
        }

    loadData() 
        {this.randomUserAPI()
        this.randomFriendsAPI()
        this.randomQuoteAPI()
        this.randomPokemonAPI()
        this.randomMeatAPI()
    }
    

    }