import React from 'react';
import { shallow } from 'enzyme';

import Tooltip from './Tooltip';

describe('Tooltip', () => {
    it('render as expected', () => {
        const wrapper = shallow(<Tooltip content="tooltips text"><button type="button">say hi !</button></Tooltip>);
        expect(wrapper.find('*')).not.toHaveLength(0);
    });
});
