import React, { Component } from 'react'
import Immutable from 'immutable';
//componentes internos
import TableExemplo from './table-exemplo'
import FormExemplo from './form-exemplo'
import FieldExemplo from './field-exemplo'
import i18n from 'i18n'
//components
import Content from 'carbon-react/lib/components/content'
import Heading from 'carbon-react/lib/components/heading'
import {Row,Column} from 'carbon-react/lib/components/row'
import Profile from 'carbon-react/lib/components/profile'
import {Table,TableRow,TableHeader,TableCell} from 'carbon-react/lib/components/table'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Content as="primary" >
              <Row  gutter="medium-large" >
                <Column>
                    <Heading title="Exemplo de um Heading" subheader="" separator={ false } />
                    <TableExemplo />
                    <Heading title="Exemplo de um form" subheader="" separator={ false } />
                    <FormExemplo />
                </Column>
                <Column>
                    <Heading title="Exemplo de um Heading" subheader="Exemplo de um SubHeading com separator" separator={ true } />
                    <FieldExemplo/>
                    <Profile
                    name="Naiade Lima"
                    email="naiade.lima@sage.com"
                    />
                </Column>
               </Row>
            </Content>
        )
    }
}