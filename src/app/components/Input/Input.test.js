import React from 'react';
import { shallow, mount } from 'enzyme';

import Input from './Input';

describe('Input', () => {
    it('Render as expected', () => {
        const wrapper = shallow(<Input type="text" status="warning" />);
        expect(wrapper.find('*')).not.toHaveLength(0);
    });
    it('Check whether isDisable working', () => {
        const wrapper = shallow(<Input type="text" status="warning" variant="autofill" isDisable />);
        expect(wrapper.find('*')).not.toHaveLength(0);
    });
    it('Should throw errors', () => {
        console.error = jest.fn();
        shallow(<Input status="warning" variant="autofil" type="text" />);
        shallow(<Input status="waning" variant="autofill" type="text" />);
        expect(console.error).toHaveBeenCalledTimes(2);
    });
    it('check onChange callback', () => {
        const onChange = jest.fn();
        const testInputOnChange = mount(<Input type="text" onChange={onChange} />).find('input');
        testInputOnChange.simulate('change', { target: { value: 'this text is changed' } });
        expect(onChange).toHaveBeenCalled();
    });
    it('check onFocus callback', () => {
        const onFocus = jest.fn();
        const testInputOnFocus = mount(<Input type="text" onFocus={onFocus} />).find('input');
        testInputOnFocus.simulate('focus');
        expect(onFocus).toHaveBeenCalledTimes(1);
    });
    it('check onBlur callback', () => {
        const onBlur = jest.fn();
        const testInputOnBlur = mount(<Input type="text" onBlur={onBlur} />).find('input');
        testInputOnBlur.simulate('blur');
        expect(onBlur).toHaveBeenCalledTimes(1);
    });
    it('check onMouseDown callback', () => {
        const onMouseDown = jest.fn();
        const testInputOnMouseDown = mount(<Input type="text" onMouseDown={onMouseDown} />).find('input');
        testInputOnMouseDown.simulate('mousedown');
        expect(onMouseDown).toHaveBeenCalledTimes(1);
    });
});
