import React from 'react';
import { shallow } from 'enzyme';

import Breadcrumb from './Breadcrumb';

describe('Breadcrumb', () => {
    const wrapper = shallow(<Breadcrumb
        isExpand
        routes={[
            {
                href: '/introduction',
                name: 'introduction',
            },
            {
                href: '/introduction/pricing',
                name: 'pricing',
            },
            {
                href: '/introduction/pricing/general',
                name: 'general',
            },
        ]}
    />);

    it('render as expected', () => {
        expect(wrapper.find('*')).not.toHaveLength(0);
    });
});
