import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import store from '../store';
import CurrencyTable from '../View/Components/CurrencyTable';

configure({ adapter: new Adapter() });

describe('<CurrencyTable />', () => {
  it('should render correctly', () => {
    const component = shallow(<CurrencyTable store={store}  />);
    expect(component).toMatchSnapshot();
  });

  it('should have table', () => {
   const component = mount(<CurrencyTable store={store} />);
   expect(component.find('table')).toHaveLength(1);
  });

  it('should have 3 columns', () => {
   const component = shallow(<CurrencyTable store={store} />);
   expect(component.render().find('table').find('thead').find('tr').find('th')).toHaveLength(3);
  });

  it('should have Mata Uang column', () => {
   const component = shallow(<CurrencyTable store={store} />);
   expect(component.render().find('table').find('thead').find('tr').find('.mata-uang').text()).toEqual('Mata Uang');
  });

  it('should have Kurs column', () => {
   const component = shallow(<CurrencyTable store={store} />);
   expect(component.render().find('table').find('thead').find('tr').find('.kurs').text()).toEqual('Kurs');
  });

  it('should have Calculated column', () => {
   const component = shallow(<CurrencyTable store={store} />);
   expect(component.render().find('table').find('thead').find('tr').find('.calculated').text()).toEqual('Calculated');
  });
});
