import React from 'react'
import Button from 'carbon-react/lib/components/button';

export default props => (
  <div>
    <Button onClick={ () => alert('You clicked the button!') }>
       An Example Button!
    </Button>
  </div>
)