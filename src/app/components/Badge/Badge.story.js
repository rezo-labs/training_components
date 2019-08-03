import React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from './Badge';

storiesOf('Badge', module)
    .add('Initial', () => (
        <>
            <Badge clickable variant="primary" size="small" maxlength={100}>1</Badge>
            <Badge clickable variant="primary" size="medium" maxlength={150}>1</Badge>
        </>
    ));
