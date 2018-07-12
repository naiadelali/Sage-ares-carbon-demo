import React, { Component } from 'react'
import ReactDOM from 'react-dom'

//componentes internos
import Grid from '../layout/grid'

//components
import NavigationBar from 'carbon-react/lib/components/navigation-bar'

//partials components

//O com´ponente MenuLateral possui os links de sair e os demais
import MenuLateral from './menus/menu-lateral-topo/menu-lateral-topo'
import MenuModulosTopo from './menus/menu-modulos-topo/menu-modulos-topo'
import MenuModulos from './menus/menu-modulos/menu-modulos'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = { menu:{}}
        this.handleChangeMenu = this.handleChangeMenu.bind(this)
        console.log(this.MenuModulosTopo)
    }
   
    handleChangeMenu(e,data) {
        this.setState({...this.state, menu:data })
    }
    componentDidMount() {
        console.log('done')
        const btnDefaultClick = document.getElementById('1');
        btnDefaultClick.click();
    }
        

    render() {
        return (
             <header id="ui-globalnav">
                <div className="nav-menu">
                    <NavigationBar as="secondary">
                        <div className="container-fluid">
                            <div className="row">
                                <Grid cols="1 1 ">
                                    <h1 id="application-logo" className="">
                                    <span className="sage-ares-title"></span>
                                    </h1>
                                </Grid>
                                <Grid cols="5 5 ">
                                    <MenuModulosTopo 
                                      handleChangeMenu={this.handleChangeMenu}
                                  
                                    />
                                </Grid>
                                <Grid cols="6 6 " >
                                    <MenuLateral/>
                                </Grid>
                            </div>
                        </div>
                    </NavigationBar>
                </div>
                <MenuModulos  lista={this.state.menu}/>
            </header>
        )
    }
}