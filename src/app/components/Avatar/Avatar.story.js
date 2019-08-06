import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from './Avatar';

storiesOf('Avatar', module)
    .add('Initial', () => (
        <Avatar clickable name="duy nguyen" status="online" size="small" />
    ));
