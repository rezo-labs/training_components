import React from 'react';
import PropTypes from 'prop-types';
import { BadgeItem } from './style_Badge';

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
            <BadgeItem
                clickable={clickable}
                variant={variant}
                type={type}
                size={size}
                maxLength={maxLength}
                isInverted={isInverted}
                onClick={onChange}
            >
                {num}
            </BadgeItem>
        );
    }
    return (
        <BadgeItem
            clickable={clickable}
            variant={variant}
            type={type}
            size={size}
            maxLength={maxLength}
            isInverted={isInverted}
            onClick={onChange}
        >
            {children}
        </BadgeItem>
    );
}
Badge.defaultProps = {
    clickable: false,
    isInverted: false,
    maxLength: null,
    type: null,
    onChange: null,
};
Badge.propTypes = {
    /** Variant of the badge, each variant has a unique style */
    variant: PropTypes.string.isRequired,
    /** Size of the badge, each size has a pre-defined number of font-size and padding and margin */
    size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
    /** return Clickable Badge or not  */
    clickable: PropTypes.bool,
    /** type of tag or number */
    type: PropTypes.oneOf(['tag', 'numeric']),
    /** change to outline Badge */
    isInverted: PropTypes.bool,
    /** define max length of Badge  */
    maxLength: PropTypes.number,
    /** event occurs when click a badge */
    onChange: PropTypes.func,
};
