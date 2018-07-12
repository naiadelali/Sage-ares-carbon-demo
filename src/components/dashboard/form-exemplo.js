import React, { Component } from 'react'
//componentes internos
import i18n from 'i18n'
//components
import Form from 'carbon-react/lib/components/form'
import Textbox from 'carbon-react/lib/components/textarea'
import PresenceValidation  from 'carbon-react/lib/utils/validations/presence/presence'
import DateInput  from 'carbon-react/lib/components/date'
import NumberInput from 'carbon-react/lib/components/number'
import InlineInputs from 'carbon-react/lib/components/inline-inputs'
import Decimal from 'carbon-react/lib/components/decimal'
import DropdownFilterAjax from 'carbon-react/lib/components/dropdown-filter-ajax'

export default class FormExemplo extends Component {
    constructor(props) {
        super(props)
      
    }

    render() {
        return(
            <Form   cancelText={i18n.t('buttons.cancel')}    saveText={i18n.t('buttons.save')} showSummary="false" >
                <Textbox  label="Name"    />
                <DateInput
                fieldHelp="teste."
                label="Example DateInput"
                labelHelp="This text provides more information for the label."
                value="2018-07-10"
                />
                <NumberInput
                value=""
                fieldHelp="This text provides help for the input."
                label="Example NumberInput"
                labelHelp="This text provides more information for the label."
                />
                <InlineInputs
                    label="Inline Inputs"
                    >
                    <Decimal
                        value="0.00"
                    />
                    <DropdownFilterAjax
                        path="/countries"
                    />
                    </InlineInputs>
            </Form>
        )
    }
}