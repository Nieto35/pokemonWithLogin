import React from 'react';
import Card from './components/card';
import Pagination from './components/pagination';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemones: [],
            currentPage: 1,
            pokemonPerPage: 10,
            pokemonImg :  0
        }
    }

    componentDidMount() {

        const limit = this.state.pokemonPerPage;

        const url = 'https://pokeapi.co/api/v2/pokemon';
        
        //Consumir la API de pokeapi
        fetch(`${url}?limit=${limit}`)
            .then(response => response.json())
            .then(data => this.setState({pokemones: data.results}))
            .catch( error => {
              console.log(error);
            })

            

    }

    fetchPage = (requestPage) => {
      //1. Completar el método para poder obtener los pokemones dependiendo de la página solicitada

      const limit = this.state.pokemonPerPage;
      const url = 'https://pokeapi.co/api/v2/pokemon';


      fetch(`${url}?limit=${limit}&offset=${(requestPage - 1) * 10}`)

            .then(response => response.json())

            .then(data => this.setState({pokemones: data.results}))

            .catch( error => {

              console.log(error);

            })

        this.setState({pokemonImg: (requestPage - 1) * 10 })
        this.setState({currentPage: requestPage})
    }

    render() {
      
        return (
            <div className="pokedex-container">
            
              {
                this.state.pokemones.map( (pokemon, index) => {      
                  //2. Solucionar el problema de obtener las imagenes de los pokemones con id < 10, > 10, > 100  
                  let pokemonImgfn = "";
                  // (pokemonImgfn = `https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`)
                  (this.state.pokemonImg + index)< 9 ?  pokemonImgfn = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${this.state.pokemonImg + (index+1)}.png` : ((this.state.pokemonImg + index) < 99 ? pokemonImgfn = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${this.state.pokemonImg + (index+1)}.png` : pokemonImgfn = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.state.pokemonImg + (index+1)}.png`)
      
                  return (
                  
                    <Card key={index + 1} name={pokemon.name} img={pokemonImgfn} num={this.state.pokemonImg + index + 1} />
                  )
                })
              }

              <Pagination fetchPageFn={this.fetchPage} currentPageFn= {this.state.currentPage} />
            </div>
        )
    }
}
