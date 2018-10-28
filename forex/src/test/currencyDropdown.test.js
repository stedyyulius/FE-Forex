import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import store from '../store';
import CurrencyDropdown from '../View/Components/CurrencyDropdown';

configure({ adapter: new Adapter() });

describe('<CurrencyDropdown />', () => {
  it('should render correctly', () => {
    const component = shallow(<CurrencyDropdown store={store}  />);
    expect(component).toMatchSnapshot();
  });

  it('There should be dropdown select currency function', () => {
    const component = mount(<CurrencyDropdown store={store} />);
    component
      .find('select.select-currency')
      .simulate('click');
    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it('should have 3 options', () => {
   const component = mount(<CurrencyDropdown store={store} />);
   expect(component.find('select.select-currency').find('option')).toHaveLength(3);
  });

  it('should have USD option', () => {
   const component = shallow(<CurrencyDropdown store={store} />);
   expect(component.render().find('.select-currency').find('.usd').text()).toEqual('USD');
  });

  it('should have SGD option', () => {
   const component = shallow(<CurrencyDropdown store={store} />);
   expect(component.render().find('.select-currency').find('.sgd').text()).toEqual('SGD');
  });

  it('should have EUR  option', () => {
   const component = shallow(<CurrencyDropdown store={store} />);
   expect(component.render().find('.select-currency').find('.eur').text()).toEqual('EUR');
  });

});
