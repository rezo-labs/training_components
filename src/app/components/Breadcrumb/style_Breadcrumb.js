import styled from 'styled-components';

const theme = {
    default: '#B7B7B7',
    active: '#464646',
};
export const BreadcrumbItem = styled.a`
    padding: 5px;
    text-decoration: none;
    color: ${props => (props.active ? theme.active : theme.default)};
    font-weight: 500;
    :hover {
        color: #005BF7;
    }
    text-transform:capitalize;
    :after{
        content:'';
        display:block;
        height: ${props => (props.elipsic ? '10px' : '')};
    }
`;
export const Separator = styled.span`
    padding: 2px;
    color: #B7B7B7;
    font-weight:500;
`;
export const WrapBreadcrumb = styled.div`
    display:flex;
    align-items:center;
    vertical-align:center;
    align-self: auto;
    font-family: 'Open Sans', sans-serif;
    font-size:15px;
`;
