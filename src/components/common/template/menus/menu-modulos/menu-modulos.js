
import React, { Component } from 'react'
//componentes internos
import ListaMenu from './ListaMenu'
//components
import {Menu, MenuItem} from 'carbon-react/lib/components/menu'

export default props => {
     //lista de menus do topo -- futuramente transformar em redux e pega de uma api
   console.log(props)
    return (   
    <header id="ui-head" className="inactive" >
        <div>
            <nav id="main-menu">
            <Menu as="primary">
                {/* {items.map(function(items, i){
                    return items
                        // return  <ListaMenu icon={menus.icon} key={i} id={menus.id} lg={menus.lg}  onClick={props.handleChangeMenu} permissoes={menus.permissoes} /> 
                  })} */}
                <MenuItem>
                    Item One
                </MenuItem>
                <MenuItem submenu="Item Two" >
                    <MenuItem href="#">Sub Menu Item One</MenuItem>
                    <MenuItem href="#">Sub Menu Item Two</MenuItem>
                </MenuItem>
            </Menu>
            </nav>
        </div>
    </header>
    )
}