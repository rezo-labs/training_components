import React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from './Badge';

storiesOf('Badge', module)
    .add('Initial', () => (
        <>
            <Badge clickable variant="primary" size="small" maxlength={100}>Primary</Badge>
            <Badge clickable variant="default" size="small" maxlength={100}>Default</Badge>
            <Badge clickable variant="secondary" size="medium" maxlength={100}>Secondary</Badge>
            <Badge clickable variant="info" size="medium" maxlength={100}>Info</Badge>
            <Badge clickable variant="error" size="medium" maxlength={100}>Error</Badge>
            <Badge clickable variant="warning" size="large" maxlength={100}>Warning</Badge>
            <Badge clickable variant="" size="large" maxlength={100}>Test</Badge>

        </>
    ));
