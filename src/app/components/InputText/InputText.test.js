import React from 'react';
import { shallow } from 'enzyme';

import InputText from './InputText';


describe('Badge', () => {
    it('Render as expected', () => {
        const wrapper = shallow(<InputText type="text" status="success" />);
        expect(wrapper.find('*')).not.toHaveLength(0);
    });
});
