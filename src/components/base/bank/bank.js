import React from 'react'
import Form    from 'carbon-react/lib/components/form';
import Textbox from 'carbon-react/lib/components/textbox';
import Heading from 'carbon-react/lib/components/heading';


export default props => (
  <div>
    <Heading title="CADASTRO DE BANCO"
             subheader="Este Cadastro Cadastra Banco"
             separator={ true } />

    <Form cancelText="Cancelar"
          saveText="Salvar"
          buttonAlign="right"
          saving={ false }
          stickyFooter={ false }
          save={ true } >
          <Textbox label="Name"/>
    </Form>    

  </div>
)