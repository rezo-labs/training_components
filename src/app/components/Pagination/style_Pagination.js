import styled from 'styled-components';

const theme = {
    default: ['white', 'black'],
    disabled: '#999999',
};
export const Myul = styled.ul`
    list-style-type:none;
    display: flex;
`;
export const HandleError = styled.h1`
    color: red;
`;
export const ButtonItems = styled.button`
    padding: 15px;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    white-space: nowrap;
    margin-right: 4px;
    font-weight: 400;
    font-size: 1.25rem;
    background: ${props => (props.active ? '#007bff' : theme[props.variant][0])};
    color: ${props => (props.active ? 'white' : props.isDisabled ? theme.disabled : theme[props.variant][1])};
    border-radius: 3px;
    border:none;
    :hover{
        background: ${props => (props.active ? '#0056b3' : '#e6e6e6')};
    }
    :before{
        content:'';
        padding-bottom:100%;
    }
`;
