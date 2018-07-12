import React from 'react'
import ReactDOM from 'react-dom'

//components interno
import Routes from './routes'
import Header from  '../common/template/header'
import Footer from '../common/template/footer'
import '../common/template/dependencies'
import 'jquery/dist/jquery'
//components
import AppWrapper from 'carbon-react/lib/components/app-wrapper/app-wrapper'

export default props => (
    <div> 
        <Header />
        <div className='ui-body'>
           <AppWrapper>
                <Routes />
           </AppWrapper>
        </div>
        <Footer />
    </div>
)
