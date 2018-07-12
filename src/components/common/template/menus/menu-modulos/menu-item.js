import React, { Component } from 'react'
//componentes internos
import i18n from 'i18n'
import ListaSubMenu from './menu-item-subitem'
//components
import {Menu, MenuItem} from 'carbon-react/lib/components/menu'

export default class ListaModulo extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const submenus  =  this.props.submenu!==undefined? this.props.submenu :[];  

        if(this.props.submenu!==undefined|| submenus.length>0){
            return(
                <MenuItem  submenu={this.props.nome}>
                    {submenus.map(function(m, i){
                        return <ListaSubMenu nome={m.nome} url={m.url} key={i}  />
                    })}
                </MenuItem>
            )
        }
        else{
            return(
                <MenuItem href={this.props.url}>
                    {this.props.nome}
                </MenuItem>
            )
        }
    }
}