import React from 'react';
import styled from 'styled-components';

const Mysize = {
    xsmall: ['50px', '1.5em', '33%', '72%', '2.5px'],
    small: ['100px', '3em', '26%', '72%', '3px'],
    medium: ['150px', '4.5em', '22%', '72%', '3.5px'],
    large: ['200px', '6em', '22%', '72%', '4px'],
    xlarge: ['300px', '9em', '25%', '75%', '4.5px'],
};

const theme = {
    online: '#50a366',
    offline: '#ccccb3',
};

const Myavatar = styled.img`
    width :inherit;
    height:inherit;
    border-radius:50%;
    padding:1px;
`;
const Mydiv = styled.div`
    margin-bottom:20px;
    width: ${props => (Mysize[props.size][0])};
    height: ${props => (Mysize[props.size][0])};
    pointer-events: ${props => (props.clickable === true ? '' : 'none')};
`;
const DivStatus = styled.div`
    position: relative;
    bottom: ${props => (Mysize[props.size][2])};
    left:${props => (Mysize[props.size][3])};
    background: ${props => (theme[props.status])};
    width: 18%;
    height: 18%;
    border-radius: 50%;
    border: ${props => (Mysize[props.size][4])} solid white;
`;

const AvataNoUrl = styled.div`
    background: #50a366;
    color: white;
    width :inherit;
    height:inherit;
    border-radius:50%;
    font-family:Arial;
`;

const DivText = styled.div`
    font-size: ${props => (Mysize[props.size][1])};
    padding:0.47em;
`;
function formatText(str) {
    const splitText = str.split(' '); let i; let sliceText = '';
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

        if (imageUrl) {
            return (
                <Mydiv
                    size={size}
                    clickable={clickable}
                >
                    <Myavatar
                        onClick={onClick}
                        name={name}
                        src={imageUrl}
                        size={size}
                    />
                    <DivStatus
                        size={size}
                        status={status}
                    />
                </Mydiv>
            );
        }
        return (
            <Mydiv
                size={size}
                clickable={clickable}
            >
                <AvataNoUrl
                    onClick={onClick}
                    name={name}
                    status={status}
                    size={size}
                >
                    <DivText size={size}>
                        {sliceText}
                    </DivText>
                </AvataNoUrl>
                <DivStatus
                    size={size}
                    status={status}
                />
            </Mydiv>
        );
    }
}
