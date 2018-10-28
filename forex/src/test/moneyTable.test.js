import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import store from '../store';
import MoneyTable from '../View/Components/MoneyTable';

configure({ adapter: new Adapter() });

describe('<MoneyTable />', () => {
  it('should render correctly', () => {
    const component = shallow(<MoneyTable store={store}  />);
    expect(component).toMatchSnapshot();
  });

  it('should have table', () => {
   const component = mount(<MoneyTable store={store} />);
   expect(component.find('table')).toHaveLength(1);
  });

  it('should have 3 headers', () => {
   const component = shallow(<MoneyTable store={store} />);
   expect(component.render().find('table').find('thead').find('tr').find('th')).toHaveLength(2);
  });

  it('should have Base header', () => {
   const component = shallow(<MoneyTable store={store} />);
   expect(component.render().find('table').find('thead').find('tr').find('.base').text()).toEqual('Base');
  });

  it('should have Jumlah header', () => {
   const component = shallow(<MoneyTable store={store} />);
   expect(component.render().find('table').find('thead').find('tr').find('.jumlah').text()).toEqual('Jumlah');
  });

});
