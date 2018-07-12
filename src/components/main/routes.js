import React from 'react'
import {Router, Route, Redirect, hashHistory } from 'react-router'

import Teste from '../cadastro/teste/teste'
import Bank from '../base/bank/bank'
import Dashboard from '../dashboard/dashboard'


export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/teste' component={Teste} />
        <Route path='/bank' component={Bank} />
        <Redirect from='*' to='/' />
    </Router>
)