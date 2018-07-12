import React, { Component } from 'react'
//componentes internos
import i18n from 'i18n'
//components
import Link from 'carbon-react/lib/components/link/link'
import ListaModulo from './ListaModulos'

export default props => {
       
        //lista de menus do topo -- futuramente transformar em redux e pega de uma api
        const menus = [
            {icon: 'chart_line', id: 1, lg: 'finances',default:true, permissoes:[
                {nome: "financeiro", url: "teste", id: "1"},
                {nome: "dois", url: "#", id: "2", submenu:{nome: "submenu", url: "#", id: "1"}}]
            },
            {icon: 'gift', id: 2, lg: 'stock', default:false,permissoes:[
                {nome: "botao", url: "#", id: "1"},
                {nome: "sdfdsf", url: "#", id: "2"}]
            },
            {icon: 'delivery', id: 3, lg: 'sales',default:false, permissoes:[
                {nome: "botao", url: "#", id: "1"}]
            }
        ];

        return (
            
                <nav id="menu-mod">
                <ul>
                    {menus.map(function(menus, i){
                        return  <ListaModulo icon={menus.icon} key={i} id={menus.id} lg={menus.lg}  onClick={props.handleChangeMenu} permissoes={menus.permissoes} /> 
                    })}
                </ul>
            </nav>
        )
}
     