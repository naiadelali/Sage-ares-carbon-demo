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
                    {nome: "Cadastro", url: "#", id: "1", submenu:[{nome: "Cadastro financeiro", url: "/#/bank", id: "1"}]},
                    {nome: "Programação", url: "#", id: "2", submenu:[{nome: "submenu 1", url: "#", id: "1"},{nome: "submenu 2", url: "#", id: "1"}]},
                    {nome: "Extrato", url: "#", id: "3", submenu:[{nome: "submenu 1", url: "#", id: "1"},{nome: "submenu 2", url: "#", id: "1"}]},
                    {nome: "Relatórios", url: "#", id: "4", submenu:[{nome: "submenu 1", url: "#", id: "1"},{nome: "submenu 2", url: "#", id: "1"}]},
                    {nome: "Menu sem submenu", url: "https://carbon.sage.com/components/menu", id: "5"},
                ]
            },
            {icon: 'gift', id: 2, lg: 'stock', default:false,permissoes:[
                    {nome: "Estoque", url: "#", id: "1", submenu:[{nome: "Cadastro financeiro", url: "#", id: "1"}]},
                    {nome: "Programação", url: "#", id: "2", submenu:[{nome: "submenu 1", url: "#", id: "1"},{nome: "submenu 2", url: "#", id: "1"}]}
                ]
            },
            {icon: 'delivery', id: 3, lg: 'sales',default:false, permissoes:[
                {nome: "Menu sem submenu", url: "https://carbon.sage.com/components/menu", id: "5"},
                {nome: "Estoque", url: "#", id: "1", submenu:[{nome: "Cadastro financeiro", url: "#", id: "1"}]},
                {nome: "Programação", url: "#", id: "2", submenu:[{nome: "submenu 1", url: "#", id: "1"},{nome: "submenu 2", url: "#", id: "1"}]}
                ]
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
     