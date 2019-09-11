import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';


describe('Pagination', () => {
    it('render as expected', () => {
        const wrapper = shallow(<Pagination total={60} />);
        expect(wrapper.find('*')).not.toHaveLength(0);
    });
    it('Custom pagination render as expected', () => {
        const wrapper = shallow(<Pagination
            total={60}
            component={page => (<span>{`page ${page}`}</span>)}
        />);
        expect(wrapper.find('*')).not.toHaveLength(0);
    });
    it('handle event errors', () => {
        console.error = jest.fn();
        // error occurs when set current > total
        shallow(<Pagination total={60} current={61} />);
        // error occurs when set current < -1
        shallow(<Pagination total={60} current={-1} />);
        expect(console.error).toHaveBeenCalledTimes(2);
    });
});
