import React, { Component } from 'react'
//componentes internos
import i18n from 'i18n'
//components
import Fieldset from 'carbon-react/lib/components/fieldset'
import Textbox from 'carbon-react/lib/components/textarea'

export default class FormExemplo extends Component {
    constructor(props) {
        super(props)
      
    }

    render() {
        return(
            <Fieldset>
            <Textbox
              value=""
              label="Primeiro nome"
              labelInline={ true }
              labelAlign="right"
            />
            <Textbox
              value=""
              label="Segundo nome"
              labelInline={ true }
              labelAlign="right"
            />
            <Textbox
              value=""
              label="Endereço"
              labelInline={ true }
              labelAlign="right"
            />
            <Textbox
              value=""
              label="Cidade"
              labelInline={ true }
              labelAlign="right"
            />
            <Textbox
              value=""
              label="País"
              labelInline={ true }
              labelAlign="right"
            />
            <Textbox
              value=""
              label="Telefone"
              labelInline={ true }
              labelAlign="right"
            />
          </Fieldset>
           
        )
    }
}