import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Mysize = {
    xsmall: ['50px', '1.5em', '33%', '72%', '2.5px'],
    small: ['100px', '3em', '26%', '72%', '3px'],
    medium: ['150px', '4.5em', '22%', '72%', '3.5px'],
    large: ['200px', '6em', '22%', '72%', '4px'],
    xlarge: ['300px', '9em', '25%', '75%'],
};

const theme = {
    online: '#50a366',
    offline: '#ccccb3',
};

const Myavatar = styled.img`
    width: inherit;
    height: inherit;
    border-radius: 50%;
    padding: 1px;
    object-fit:cover;
    float:none;
    position:relative;
    left:0;
`;

const Mydiv = styled.div`
    background:#50a366;
    border-radius:50%;
    margin-bottom: 20px;
    width: ${props => Mysize[props.size][0]};
    height: ${props => Mysize[props.size][0]};
    pointer-events: ${props => (props.clickable === true ? '' : 'none')};

`;

const DivStatus = styled.div`
    position: relative;
    bottom: ${props => Mysize[props.size][2]};
    left: ${props => Mysize[props.size][3]};
    background: ${props => theme[props.status]};
    width: 18%;
    height: 18%;
    border-radius: 50%;
    border: ${props => Mysize[props.size][4]} solid white;
`;

const AvatarNoUrl = styled.div`
    background: '#50a366';
    color: white;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    font-family: Arial;
`;

const DivText = styled.div`
    font-size: ${props => Mysize[props.size][1]};
    text-transform: uppercase;
    position:relative;
    top:50%;
    text-align:center;
    transform:translateY(-50%);
    width:100%;
    height:fit-content;
    
`;

function formatText(str) {
    const splitText = str.split(' ');
    let i;
    let sliceText = '';
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

/**
 * A component that represents a user.
 */
export default function Avatar(props) {
    const {
        clickable, onClick, name, imageUrl, status, size,
    } = props;

    if (name) {
        const sliceText = formatText(name);

        if (imageUrl) {
            return (
                <Mydiv size={size} clickable={clickable} onClick={onClick}>
                    <Myavatar name={name} src={imageUrl} size={size} />
                    <DivStatus size={size} status={status} />
                </Mydiv>
            );
        }
        return (
            <Mydiv size={size} clickable={clickable} onClick={onClick}>
                <AvatarNoUrl name={name} status={status} size={size}>
                    <DivText name={name} size={size}>{sliceText}</DivText>
                </AvatarNoUrl>
                <DivStatus size={size} status={status} />
            </Mydiv>
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
