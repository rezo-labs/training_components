import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Badge component
 */
const theme = {
    primary: ['#007bff', '#007bff'],
    default: ['#d6d6c2', 'white'],
    secondary: ['#6c757d', '#6c757d'],
    info: ['#17a2b8', '#17a2b8'],
    error: ['#ff1a1a', '#ff1a1a'],
    warning: ['#ffc107', '#ffc107'],
    success: ['#28a745', '#28a745'],
    '': ['black', 'black'],
};
const Mysize = {
    small: '15px',
    medium: '25px',
    large: '35px',
};
const Mytype = {
    tag: 'uppercase',
};
const Mybadge = styled.span`
    display:inline-block;
    background: ${props => (props.isInverted || props.variant === 'default' ? 'white' : theme[props.variant][0])};
    color: ${props => (props.isInverted || props.variant === 'default' ? theme[props.variant][0] : 'white')};
    font-size: ${props => (Mysize[props.size])};
    padding: 10px;
    border: 2px solid ${props => (props.isInverted || props.variant === 'default' ? theme[props.variant][1] : '')};
    border-radius:6px;
    text-align:center;
    margin-left:10px;
    max-width:${props => (props.maxLength ? `${props.maxLength}px` : '')};
    font-weight:650;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: ${props => (Mytype[props.type])};
    pointer-events: ${props => (props.clickable ? '' : 'none')};
    font-family:Sans-serif;
    :hover{
        background: ${props => (props.isInverted || props.variant === 'default' ? theme[props.variant][0] : 'white')};
        color: ${props => (props.isInverted || props.variant === 'default' ? 'white' : theme[props.variant][0])};
        border-color: ${props => (props.isInverted || props.variant === 'default' ? '' : theme[props.variant][1])};
    }
`;

export default function Badge(props) {
    function formatNumber(num) {
        if (num >= 10000000) {
            return '10M';
        }
        return num;
    }
    const {
        clickable, variant, size, type, maxLength, isInverted, children, onChange,
    } = props;
    if (type === 'numeric') {
        const num = formatNumber(parseInt(props.children, 10));
        return (
            <Mybadge
                clickable={clickable}
                variant={variant}
                type={type}
                size={size}
                maxLength={maxLength}
                isInverted={isInverted}
                onClick={onChange}
            >
                {num}
            </Mybadge>
        );
    }
    return (
        <Mybadge
            clickable={clickable}
            variant={variant}
            type={type}
            size={size}
            maxLength={maxLength}
            isInverted={isInverted}
            onClick={onChange}
        >
            {children}
        </Mybadge>
    );
}

Badge.propTypes = {
    /** Variant of the badge, each variant has a unique style */
    variant: PropTypes.string.isRequired,
    /** Size of the badge, each size has a pre-defined number of font-size and padding and margin */
    size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
};
