import React from 'react';
import { shallow } from 'enzyme';
import Button from 'carbon-react/lib/components/button';
import Sample from './sample';

describe('Sample Component', () => {
  const renderShallow = () => (
    shallow(<Sample />)
  );

  it('renders a button', () => {
    const wrapper = renderShallow();
    expect(wrapper).toMatchSnapshot();
  });

  it('triggers an alert on click', () => {
    const wrapper = renderShallow();
    spyOn(global, 'alert');
    wrapper.find(Button).simulate('click');
    expect(global.alert).toHaveBeenCalledWith('You clicked the button!');
  });
});
