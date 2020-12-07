import React from 'react';
import Detail from './pokemonDetail';
import Type from './types'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            abierto: false,
            pokemonDetails: [],
            stat: [],
            types: [
                // fire = '#FDDFDF',
                // grass = '#DEFDE0',
                // electric = '#FCF7DE',
                // water = '#DEF3FD',
                // ground = '#f4e7da',
                // rock = '#d5d5d4',
                // fairy = '#fceaff',
                // poison = '#98d7a5',
                // bug = '#f8d5a3',
                // dragon = '#97b3e6',
                // psychic = '#eaeda1',
                // flying = '#F5F5F5',
                // fighting = '#E6E0D4',
                // normal = '#F5F5F5'
            ]
        }
    }
    
    abrirModal=(num)=> {
        this.setState({abierto: !this.state.abierto});
        this.infoPokemon(num);

    }

    componentDidMount() {


        const url = 'https://pokeapi.co/api/v2/pokemon/1';
        
        //Consumir la API de pokeapi
        fetch(`${url}`)
            .then(response => response.json())
            .then(data => this.setState({pokemonDetails: data.stats, types: data.types}))
            .catch( error => {
              console.log(error);
            })

            

    }


    infoPokemon = (num) => {
        //1. Guardar los detalles de un pokemon
  
        const url = 'https://pokeapi.co/api/v2/pokemon/';

  
        fetch(`${url}${num}`)
  
              .then(response => response.json())
  
              .then(data => this.setState({pokemonDetails: data.stats, types: data.types}))
  
              .catch( error => {
  
                console.log(error);
  
              })
    
      }

    render() {
    
        
        return (
        <div className="card-container">
            <div className="bg-image">
            <img src={this.props.img} alt={this.props.name} />
            </div>

            <div className="card-body bg-body">
            <h2>{this.props.name}</h2>
            <h3>#{this.props.num}</h3>
            <div className="pokemon-type"> {this.state.types.map((type, index) => <Type key= {index} type ={type.type.name}/>)} </div>
            <Button className="button-details" onClick= {() => this.abrirModal(this.props.num)}> Detalles</Button>
            </div>
              
            <Modal isOpen={this.state.abierto}>
            
                <ModalHeader>
                    <h2>#{this.props.num}</h2>
                    <h2>{this.props.name}</h2>
                </ModalHeader>
                    

                <ModalBody>
                    <div className="bg-image">
                        <img src={this.props.img} alt={this.props.name} />
                    </div>
                    
                    <div className="body-memu">
                        {this.state.pokemonDetails.map((detail, index) => <Detail key= {index} name = {detail.stat.name} stat = {detail.base_stat}/>)}
                        {this.state.types.map((type, index) => <Type key= {index} type ={type.type.name}/>)}
                    </div>
                    
                </ModalBody>
                
                <ModalFooter>
                    <Button onClick= {() => this.abrirModal(this.props.num)}> Cerrar </Button>
                </ModalFooter>
             </Modal>
             
           
        </div>
        );
    }


}