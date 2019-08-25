import React from 'react';
import PropTypes from 'prop-types';
import {
    AvatarItem, WrapAvatar, AvataNoUrl, AvatarStatus, TextAvatar,
} from './style_Avatar';

function formatText(str) {
    const splitText = str.split(' '); let i; let sliceText = '';
    if (splitText.length < 2) {
        for (i = 0; i < 1; i += 1) {
            sliceText += splitText[i].slice(0, 1);
        }
        return sliceText;
    }
    for (i = 0; i < 2; i += 1) {
        sliceText += splitText[i].slice(0, 1);
    }
    return sliceText;
}
export default function Avatar(props) {
    const {
        clickable, onClick, name, imageUrl, status, size,
    } = props;
    if (name) {
        const sliceText = formatText(name);
        return (
            <WrapAvatar
                size={size}
                clickable={clickable}
                onClick={onClick}
            >
                {imageUrl
                    ? (
                        <AvatarItem
                            name={name}
                            src={imageUrl}
                            size={size}
                        />
                    )
                    : (
                        <AvataNoUrl
                            name={name}
                            status={status}
                            size={size}
                        >
                            <TextAvatar size={size}>
                                {sliceText}
                            </TextAvatar>
                        </AvataNoUrl>
                    )}
                <AvatarStatus
                    size={size}
                    status={status}
                />
            </WrapAvatar>
        );
    }
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
