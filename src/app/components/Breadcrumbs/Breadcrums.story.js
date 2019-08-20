import React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';

storiesOf('Breadcrumbs', module)
    .add('Initial', () => (
        <Breadcrumbs
        disabled = 'false'
        routes={[
                {
                    name: 'introduction', // 0
                    href: '/introduction',
                },
                {
                    name: 'pricing', // 1
                    href: '/introduction/pricing',
                },
                {
                    name: 'general', // 2
                    href: '/introduction/pricing/general',
                },
                
            ]}
            activeItem={2}
        />
    ));
