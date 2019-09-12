import React from 'react';
import PropTypes from 'prop-types';
import { Tooltips, WrapTooltips, Triagle } from './style_Tooltips';
import openTooltips, { exitTooltips, checkVisible } from './function_Tooltip';
// group handle event to shorten code
function GroupEventOpenExit(eventCall, checkOnChange) {
    // check have onChange event
    if (checkOnChange) {
        // callback trigger event
        checkOnChange(eventCall);
        return null;
    }
    // return the event input.
    return eventCall;
}
export default function Tooltip(props) {
    const {
        variant, trigger, content, maxWidth, truncate, onChange,
        position, offset, delay, children,
    } = props;
    return (
        <WrapTooltips
            trigger={trigger}
            position={position}
            offset={offset}
            delay={delay}
            onClick={(e) => {
                // check trigger ==== click !
                if (trigger === 'click') {
                    if (onChange) {
                        // callback event check if event isVisible or not
                        if (checkVisible(e.currentTarget.children[0].style.visibility)) {
                            onChange(exitTooltips(e));
                            return null;
                        }
                        onChange(openTooltips(e, props));
                        return null;
                    }
                    // if tootips is visible then click again to hide tooltips
                    if (checkVisible(e.currentTarget.children[0].style.visibility)) {
                        exitTooltips(e);
                        return null;
                    }
                    // open tooltips
                    openTooltips(e, props);
                    return null;
                }
                e.currentTarget.focus();
                return null;
            }}
            onMouseOver={(e) => {
                if (trigger === 'hover') {
                    GroupEventOpenExit(openTooltips(e, props), onChange);
                }
                return null;
            }}
            onMouseOut={(e) => {
                if (trigger === 'hover') {
                    GroupEventOpenExit(exitTooltips(e, props), onChange);
                }
                return null;
            }}
            tabIndex={0}
            onFocus={(e) => {
                if (trigger === 'focus') {
                    GroupEventOpenExit(openTooltips(e, props), onChange);
                }
                return null;
            }}
            onBlur={(e) => {
                if (trigger === 'focus') {
                    GroupEventOpenExit(exitTooltips(e, props), onChange);
                }
                return null;
            }}
        >
            <Tooltips
                variant={variant}
                maxWidth={maxWidth}
                truncate={truncate}
                position={position}
            >
                {content}
                <Triagle position={position} />
            </Tooltips>
            {children}
        </WrapTooltips>
    );
}
Tooltip.defaultProps = {
    variant: 'default',
    trigger: 'hover',
    maxWidth: null,
    truncate: false,
    onChange: null,
    position: 'top',
    offset: 0,
    delay: 300,
};
Tooltip.propTypes = {
    /** style of tooltip */
    variant: PropTypes.oneOf(['default', 'minimal', 'with-arrow']),
    /** trigger when tooltip should come out */
    trigger: PropTypes.oneOf(['hover', 'click', 'focus']),
    /** content of the tooltip is required */
    content: PropTypes.string.isRequired,
    /** children node of the tooltip is required */
    children: PropTypes.node.isRequired,
    /** max width of tooltip, will begin a new line if content overlaps maxwidth */
    maxWidth: PropTypes.number,
    /** content just in one line, overflow content will be hidden if content overlaps maxwidth */
    truncate: PropTypes.bool,
    /** a function when tooltip appears or disapears */
    onChange: PropTypes.func,
    /** where the tooltip should be rendered beside the object */
    position: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
    /** it's a number, declination of tooltip compare to its object */
    offset: PropTypes.number,
    /** delay time to before call tooltip */
    delay: PropTypes.number,
};
