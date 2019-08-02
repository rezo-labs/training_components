import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Badge component
 */
const Mybadge = styled.span`
    display:inline-block;
    background: ${props => (props.isInverted ? 'white' : theme[props.variant][0])};
    color: ${props => (props.isInverted ? theme[props.variant][0] : theme[props.variant][1])};
    font-size: ${props => (size[props.size])};
    padding: 10px;
    border: 2px solid ${props => (props.isInverted == true ? theme[props.variant][0] : '')};
    border-radius:6px;
    text-align:center;
    margin-left:10px;
    max-width:${props => (props.maxlength)+'px'};
    font-weight:600;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: ${props => (type[props.type])};
    pointer-events: ${props => (props.clickable ? '':'none')};
`
const theme = {
    primary: ['#007bff','white'],
    default: ['white','#ccccb3'],
    secondary: ['#6c757d','white'],
    info: ['#17a2b8','white'],
    error: ['#ff1a1a','white'],
    warning: ['#ffc107','white'],
    success: ['#28a745','white'],
    '' : ['white','black'],
}
const size = {
    small: '15px',
    medium: '25px',
    large: '35px',
}
const type ={
    tag :'uppercase',
    numeric : '',
}
export default function Badge(props) {
    function onChange(){
        console.log('click','u clicked this');
    }
//    console.log("props123",props);
   console.log('props123',props.children)

    return (
        <Mybadge clickable={props.clickable} variant = {props.variant} type = {props.type} size = {props.size} maxlength ={props.maxlength} isInverted={props.isInverted} onClick={onChange}>
            {props.children}
        </Mybadge>
    );
    
}

Badge.propTypes = {
    /** Variant of the badge, each variant has a unique style */
    variant: PropTypes.string.isRequired,
    /** Size of the badge, each size has a pre-defined number of font-size and padding and margin */
    size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
};
