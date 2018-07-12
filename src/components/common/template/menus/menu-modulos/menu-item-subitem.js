
import React, { Component } from 'react'
//componentes internos
//components
import {Menu, MenuItem} from 'carbon-react/lib/components/menu'


export default class ListaSubMenu extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    
    render() {
         return(
            <MenuItem href={this.props.url}>{this.props.nome}</MenuItem>
         )
      
    }
}