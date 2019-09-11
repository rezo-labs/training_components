import React from 'react';
import PropTypes from 'prop-types';
import warringSVG from './assets/warning.svg';
import successSVG from './assets/success.svg';
import errorSVG from './assets/error.svg';
import {
    WrapInput, LabelInput, IconHelpText, InputText, Text, HelpText,
} from './style_Input';

export default function Input(props) {
    const {
        type, variant, isDisable, defaultValue, onChange,
        label, helpText, placeholder,
        id, onBlur, onMouseDown, onFocus, value, status,
    } = props;
    function checkStatus(statusInput) {
        if (statusInput === 'warning') {
            return (<IconHelpText src={warringSVG} />);
        }
        if (statusInput === 'success') {
            return (<IconHelpText src={successSVG} />);
        }
        if (statusInput === 'error') {
            return (<IconHelpText src={errorSVG} />);
        }
        return null;
    }
    if (type === 'password' || type === 'text' || type === 'number') {
        return (
            <WrapInput>
                {label
                    ? (
                        <LabelInput>
                            {label}
                        </LabelInput>
                    ) : null }
                {isDisable
                    ? (
                        <InputText
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
                        <InputText
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
                    <HelpText
                        status={status}
                    >
                        {checkStatus(status)}
                        <Text>
                            {helpText}
                        </Text>
                    </HelpText>
                ) : null
                }
            </WrapInput>
        );
    }
    return null;
}
Input.defaultProps = {
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
    status: null,
};
Input.propTypes = {
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
