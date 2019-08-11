import React from 'react';
import { storiesOf } from '@storybook/react';
import InputText from './InputText';

storiesOf('InputText', module)
    .add('Initial', () => (
        <InputText />
    ));
