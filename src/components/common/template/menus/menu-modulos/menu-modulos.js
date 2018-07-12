
import React, { Component } from 'react'
//componentes internos
import ListaMenu from './menu-item'
//components
import {Menu, MenuItem} from 'carbon-react/lib/components/menu'

export default props => {

    const permissoesMenus  = props.lista.hasOwnProperty("permissoes") ? props.lista.permissoes : [];
    return (   
    <header id="ui-head" className="inactive" >
        <div>
            <nav id="main-menu">
            <Menu as="primary">
                <MenuItem selected={true} href="/#/">
                    Área de Trabalho
                </MenuItem>
                {permissoesMenus.map(function(m, i){
                    return <ListaMenu key={m.id} nome={m.nome} url={m.url} submenu= {m.submenu} />
                  })}
            </Menu>
            </nav>
        </div>
    </header>
    )
   }