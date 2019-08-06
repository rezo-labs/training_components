import React from 'react';
import { shallow, mount } from 'enzyme';

import Avatar from './Avatar';

describe('Avatar', () => {
    it('Render as expected', () => {
        const wrapper = shallow(<Avatar name="D" status="online" size="small" />);
        expect(wrapper.find('*')).not.toHaveLength(0);
    });
    it('Clickable', () => {
        const wrapper = shallow(<Avatar clickable name="D" status="online" size="small" />);
        expect(wrapper.find('*')).not.toHaveLength(0);
    });
    it('Should throw errors', () => {
        console.error = jest.fn();
        shallow(<Avatar name="D" status="oline" size="small" />);
        shallow(<Avatar name="D" status="online" size="sall" />);
        expect(console.error).toHaveBeenCalledTimes(2);
    });
    it('Call function on click', () => {
        const mockOnClick = jest.fn();
        const wrapper = mount(<Avatar name="D" status="online" size="small" onClick={mockOnClick} />);
        wrapper.find('div').first().simulate('click');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
