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
        clickable, variant, size, type, maxLength, isInverted, children, onClick,
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
                onClick={onClick}
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
            onClick={onClick}
        >
            {children}
        </BadgeItem>
    );
}

Badge.propTypes = {
    /** Variant of the badge, each variant has a unique style */
    variant: PropTypes.string.isRequired,
    /** Size of the badge, each size has a pre-defined number of font-size and padding and margin */
    size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
};
