import React from 'react';
import PropTypes from 'prop-types';

/**
 * A component that represents a user.
 */
export default function Avatar(props) {
    return (
        <div />
    );
}

Avatar.defaultProps = {
    clickable: false,
    onClick: null,
    imageUrl: null,
};

Avatar.propTypes = {
    /** Indicate the avatar should be clickable, i.e has mouse pointer on hover, focusable. */
    clickable: PropTypes.bool,
    /** Function called when the avatar is clicked, or pressed enter while focusing. */
    onClick: PropTypes.func,
    /** Name of the user. */
    name: PropTypes.string.isRequired,
    /** URL of the user's avatar. */
    imageUrl: PropTypes.string,
    /** User's status */
    status: PropTypes.oneOf(['online', 'offline']).isRequired,
    /** Size of the avatar */
    size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']).isRequired,
};
