import '../common/template/dependencies'
import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './routes'
import Header from  '../common/template/header'
//import SideBar from '../common/template/sidebar'
import Footer from '../common/template/footer'
//import Routes from './routes'

export default props => (
    <div> 
        <Header />
        <div className='container'>
           <Routes />
        </div>
        <Footer />
    </div>
)
