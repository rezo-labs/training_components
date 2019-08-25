import styled from 'styled-components';

const theme = {
    default: '#999999',
    active: 'black',
};
export const Atext = styled.a`
    padding: 5px;
    text-decoration: none;
    color: ${props => (props.active ? theme.active : theme.default)};
    font-weight: 500;
    :hover {
        color: #0066ff;
    }
`;
export const Spanseparator = styled.span`
    padding: 2px;
    color: #999999;
`;
export const Mydiv = styled.div`
    display:flex;
    align-items:center;
`;
