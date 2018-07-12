import React, { Component } from 'react'
//componentes internos
import i18n from 'i18n'
//components
import Link from 'carbon-react/lib/components/link/link'

export default class ListaModulo extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
        <li>
            <div className="menu-item">
                <Link  icon={this.props.icon} href="#" id={this.props.id} 
                 onClick={((e) => this.props.onClick(e, this.props))} 
                 ref="dfsd"
                 tabbable={ true } > {i18n.t(`menu.modulos.${this.props.lg}`)} </Link>
            </div>
        </li>
        )
    }
}