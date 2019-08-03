import React from 'react';
import { shallow } from 'enzyme';

import Badge from './Badge';

describe('Badge', () => {
<<<<<<< HEAD
    it('Render as expected', () => {
        const wrapper = shallow(<Badge variant="primary" size="small" />);
        expect(wrapper.find('*')).not.toHaveLength(0);
=======
    // eslint-disable-next-line no-unused-vars
    const wrapper = shallow(<Badge variant="primary" size="small"> Primary</Badge>);

    it('', () => {
        //
>>>>>>> duynguyen_badge_2/8/2019
    });
});
