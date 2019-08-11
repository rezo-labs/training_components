import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import warningSVG from './Assets/warning.svg';
import successSVG from './Assets/success.svg';
import errorSVG from './Assets/error.svg';

const theme = {
    minimal: ['transparent', '#000000', 'white'],
    compact: ['', '#000', 'white'],
    default: ['#ccc', '#808080', 'white'],
    autofill: ['transparent', '#000', '#e6ffe6'],
    focus: ['#0099ff', '#000', 'white'],
};

const themeStatus = {
    error: ['#d93025', '#000', 'white'],
    success: ['#00802b', '#000', 'white'],
    warning: ['#ffc107', '#000', 'white'],
};

const Myinput = styled.input`
    margin: 5px 0;
    padding:15px;
    font-size:23px;
    width:350px;
    color:${props => (props.isDisable ? '' : props.status ? themeStatus[props.status][1] : props.variant ? theme[props.variant][1] : theme.default[1])};
    border: 3px solid ${props => (props.isDisable ? 'transparent' : props.status ? themeStatus[props.status][0] : props.variant ? theme[props.variant][0] : theme.default[0])};
    background:${props => (props.isDisable ? '' : props.status ? themeStatus[props.status][2] : props.variant ? theme[props.variant][2] : theme.default[2])};
    outline:none;
    border-radius:5px;
    :disabled{
        color:#b3b3b3;
    };
    :focus{
        border: 3px solid #0099ff;
        background:white;
        color:black;
    };
    :hover{
        color:#000;
        background:#e1e1d0;
        border: 3px solid #ccc;
    };
`;

const Mylabel = styled.label`
    display:block;
    color: #808080;
    font-size:18px;
`;

const Mydiv = styled.div`
    width: fit-content;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 10px;
    font-weight: 500;
`;

const Myimg = styled.img`
    margin-right:5px;
    object-fit:cover;
    width: 20px;
    height:20px;
`;

const HelpText = styled.div`
    color:${props => (props.status ? themeStatus[props.status][0] : theme.default[1])};
    display:flex;
    line-height: 20px;
`;

const DivText = styled.span`
    font-size:15px;
`;

export default function InputText(props) {
    const {
        type, variant, isDisable, defaultValue, onChange, label, helpText, placeholder,
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
                    ) : null}
                {
                    isDisable
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
                {
                    helpText ? (
                        <HelpText
                            status={status}
                        >
                            {
                                status === 'warning'
                                    ? (<Myimg src={warningSVG} />)
                                    : status === 'success'
                                        ? (<Myimg src={successSVG} />)
                                        : status === 'error'
                                            ? (<Myimg src={errorSVG} />) : null
                            }
                            <DivText>
                                {helpText}
                            </DivText>
                        </HelpText>
                    ) : null
                }
            </Mydiv>
        );
    }
}

InputText.defaultProps = {
    variant: 'default',
    isDisable: false,
    onBlur: null,
    onChange: null,
    onMouseDown: null,
    onFocus: null,
    id: null,
    label: null,
    helpText: null,
    placeholder: null,
    defaultInput: '',
};
InputText.propTypes = {
    /* Required value */
    /** User's Type */
    type: PropTypes.oneOf(['number', 'text', 'password']).isRequired,
    /* optional value */
    /** User's variant */
    variant: PropTypes.oneOf(['default', 'minimal', 'autofill', 'focus']),
    /** User's status */
    status: PropTypes.oneOf(['warning', 'error', 'success']),
    /** User's isDisable is optional but it's the first priority in render */
    isDisable: PropTypes.bool,
    /* String value */
    id: PropTypes.string,
    label: PropTypes.string,
    helpText: PropTypes.string,
    placeholder: PropTypes.string,
    /* Event propTypes: */
    /** Function called when user presses a mouse over the input  */
    onMouseDown: PropTypes.func,
    /** Function called when user leaves the input after focusing. */
    onBlur: PropTypes.func,
    /** Function called when the value of the input has been changed */
    onChange: PropTypes.func,
    /** Function called when the input get focus. */
    onFocus: PropTypes.func,
};
