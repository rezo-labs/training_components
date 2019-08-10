import React from 'react';
import styled from 'styled-components';
import warringSVG from './assets/warning.svg';
import successSVG from './assets/success.svg';
import errorSVG from './assets/error.svg';

const theme = {
    minimal: ['transparent', '#000000', 'white'],
    compact: ['', '#000000', 'white'],
    default: ['#cccccc', '#808080', 'white'],
    autofill: ['transparent', '#000000', '#e6ffe6'],
    hover: ['#cccccc', '#000000', '#e1e1d0'],
    focus: ['#0099ff', '#000000', 'white'],
};
const themeStatus = {
    error: ['#d93025', '#000000', 'white'],
    success: ['#00802b', '#000000', 'white'],
    warning: ['#ffc107', '#000000', 'white'],
};
const Myinput = styled.input`
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
`;

const Mylabel = styled.label`
     display:block;
     color: #808080;
     font-size:18px;
`;
const Mydiv = styled.div`
    width:fit-content;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom:10px;
    font-weight:500;
`;
const Myimg = styled.img`
    margin-right:5px;
    object-fit:cover;
    width:20px;
    height:20px;
`;
const Helptext = styled.div`
    color: ${props => (props.status ? themeStatus[props.status][0] : theme.default[1])};  
    display:flex;
    line-height:20px;
`;
const Divtext = styled.span`
    font-size: 15px;
`;
export default function Input(props) {
    const {
        type, variant, isDisable, defaultValue, onChange,
        label, helpText, placeholder,
        id, onBlur, onMouseDown, onFocus, value, status,
    } = props;
    if (type === 'password' || type === 'text' || type === 'number') {
        return (
            <Mydiv>
                {label
                    ? (
                        <Mylabel>
                            {label}
                        </Mylabel>
                    ) : null }
                {isDisable
                    ? (
                        <Myinput
                            type={type}
                            disabled
                            id={id}
                            isDisable={isDisable}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onChange={onChange}
                            onMouseDown={onMouseDown}
                            value={value}
                            defaultValue={defaultValue}
                        />
                    )
                    : (
                        <Myinput
                            status={status}
                            type={type}
                            variant={variant}
                            placeholder={placeholder}
                            id={id}
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onMouseDown={onMouseDown}
                            value={value}
                            defaultValue={defaultValue}
                        />
                    )
                }
                {helpText ? (
                    <Helptext
                        status={status}
                    >
                        {status === 'warning'
                            ? (<Myimg src={warringSVG} />)
                            : status === 'success'
                                ? (<Myimg src={successSVG} />)
                                : status === 'error'
                                    ? (<Myimg src={errorSVG} />) : null
                        }
                        <Divtext>
                            {helpText}
                        </Divtext>
                    </Helptext>
                ) : null
                }
            </Mydiv>
        );
    }
    return null;
}
