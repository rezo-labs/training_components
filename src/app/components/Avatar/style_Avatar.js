import styled from 'styled-components';

const Size = {
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

export const AvatarItem = styled.img`
    width :100%;
    height:100%;
    border-radius:50%;
    padding:1px;
    object-fit:cover;
    float:none;
    position: relative;
    left:0;  
`;
export const WrapAvatar = styled.div`
    margin-bottom:20px;
    width: ${props => (Size[props.size][0])};
    height: ${props => (Size[props.size][0])};
    /* pointer-events: ${props => (props.clickable === true ? '' : 'none')}; */
    cursor: ${props => (props.clickable === true ? 'pointer' : '')};
    display:inline-block;
    margin-right:20px;
`;
export const AvatarStatus = styled.div`
    position: relative;
    bottom: ${props => (Size[props.size][2])};
    left:${props => (Size[props.size][3])};
    background: ${props => (theme[props.status])};
    width: 18%;
    height: 18%;
    border-radius: 50%;
    border: ${props => (Size[props.size][4])} solid white;
`;

export const AvataNoUrl = styled.div`
    /* background: #50a366; */
    color: white;
    width :inherit;
    height:inherit;
    border-radius:50%;
    font-family:Arial;
    background: #50a366;
`;

export const TextAvatar = styled.div`
    font-size: ${props => (Size[props.size][1])};
    text-transform: uppercase;
    position:relative;
    top:50%;
    text-align:center;
    transform: translateY(-50%);
    width:100%;
    height:fit-content;
    pointer-events:none;
`;
