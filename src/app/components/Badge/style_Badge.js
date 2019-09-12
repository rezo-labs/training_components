import styled from 'styled-components';

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
const Size = {
    small: '15px',
    medium: '25px',
    large: '35px',
};
const Type = {
    tag: 'uppercase',
};
export const BadgeItem = styled.span`
    display:inline-block;
    background: ${props => (props.isInverted || props.variant === 'default' ? 'white' : theme[props.variant][0])};
    color: ${props => (props.isInverted || props.variant === 'default' ? theme[props.variant][0] : 'white')};
    font-size: ${props => (Size[props.size])};
    padding: 10px;
    border: 2px solid ${props => (props.isInverted || props.variant === 'default' ? theme[props.variant][1] : '')};
    border-radius:6px;
    text-align:center;
    max-width:${props => (props.maxLength ? `${props.maxLength}px` : '')};
    font-weight:650;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: ${props => (Type[props.type])};
    pointer-events: ${props => (props.clickable ? '' : 'none')};
    cursor: ${props => (props.clickable ? 'pointer' : '')};
    font-family:Sans-serif;
    :hover{
        background: ${props => (props.isInverted || props.variant === 'default' ? theme[props.variant][0] : 'white')};
        color: ${props => (props.isInverted || props.variant === 'default' ? 'white' : theme[props.variant][0])};
        border-color: ${props => (props.isInverted || props.variant === 'default' ? '' : theme[props.variant][1])};
    }
`;
