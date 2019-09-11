import React from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from './Pagination';

storiesOf('Pagination', module)
    .add('Initial', () => (
        <Pagination />
    ));
