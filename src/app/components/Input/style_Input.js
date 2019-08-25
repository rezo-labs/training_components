import styled from 'styled-components';

const theme = {
    minimal: ['transparent', '#000000', 'white'],
    compact: ['', '#000000', 'white'],
    default: ['#cccccc', '#808080', 'white'],
    autofill: ['transparent', '#000000', '#e6ffe6'],
    focus: ['#0099ff', '#000000', 'white'],
};
const themeStatus = {
    error: ['#d93025', '#000000', 'white'],
    success: ['#00802b', '#000000', 'white'],
    warning: ['#ffc107', '#000000', 'white'],
};
export const Myinput = styled.input`
    margin: 5px 0;
    padding: 15px;
    font-size:23px;
    width:350px;
    color: ${props => (props.isDisable ? '' : props.status ? themeStatus[props.status][1]
        : props.variant ? theme[props.variant][1] : theme.default[1])};
    border: 3px solid ${props => (props.isDisable ? 'transparent' : props.status ? themeStatus[props.status][0]
        : props.variant ? theme[props.variant][0] : theme.default[0])};
    background: ${props => (props.isDisable ? '' : props.status ? themeStatus[props.status][2]
        : props.variant ? theme[props.variant][2] : theme.default[2])};
    outline:none;
    border-radius:5px;
    :disabled{
        color: #b3b3b3;
    };
    :focus{
        border: 3px solid #0099ff;
        background: white;
        color:black;
    };
    :hover{
        color: #000000;
        background: #e1e1d0;
        border: 3px solid #cccccc;
    };
`;

export const Mylabel = styled.label`
     display:block;
     color: #808080;
     font-size:18px;
`;
export const Mydiv = styled.div`
    width:fit-content;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom:10px;
    font-weight:500;
`;
export const Myimg = styled.img`
    margin-right:5px;
    object-fit:cover;
    width:20px;
    height:20px;
`;
export const Helptext = styled.div`
    color: ${props => (props.status ? themeStatus[props.status][0] : theme.default[1])};  
    display:flex;
    line-height:20px;
`;
export const Divtext = styled.span`
    font-size: 15px;
`;
