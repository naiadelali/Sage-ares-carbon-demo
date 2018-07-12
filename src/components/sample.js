import React from 'react';
import Button from 'carbon-react/lib/components/button';

const Sample = () => (
  <Button onClick={ () => alert('You clicked the button!') }>
    An Example Button!
  </Button>
);

export default Sample;
