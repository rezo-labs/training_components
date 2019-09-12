import styled from 'styled-components';

const theme = {
    default: ['#172B4D', '#FFFFFF'],
    'with-arrow': [null, null],
    minimal: [null, null],
};
const drawTriagleTootips = {
    top: ['5px 5px 0px 5px', '#172B4D transparent transparent transparent'],
    bottom: ['0px 5px 5px 5px', 'transparent transparent #172B4D transparent'],
    right: ['5px 5px 5px 0px', 'transparent #172B4D transparent transparent'],
    left: ['5px 0px 5px 5px', 'transparent transparent transparent #172B4D'],
};
export const Tooltips = styled.div`
    box-sizing:border-box;
    background: ${props => (props.variant ? (theme[props.variant][0]) : (theme.default[0]))};
    color: ${props => (props.variant ? (theme[props.variant][1]) : (theme.default[1]))};
    padding: 5px 10px;
    position: absolute;
    border-radius: 5px;
    visibility: hidden;
    transition:all;
    color: #ffffff;
    font-family: 'Barlow', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    white-space: ${props => (props.truncate ? 'nowrap' : props.maxWidth ? null : 'nowrap')};
    width: ${props => (props.maxWidth ? `${props.maxWidth}px` : null)};
    overflow: ${props => (props.truncate ? 'hidden' : null)};
    text-overflow: ${props => (props.truncate ? 'ellipsis' : null)};
    outline:none;
    pointer-events:none;
`;
export const WrapTooltips = styled.div`
    position: relative;
    width: fit-content;
    display:flex;
    flex-direction: row-reverse;
    align-items:center;
    justify-content:center;
    outline:none;
`;
export const Triagle = styled.div`
    border-style: solid;
    width:0;
    height:0;
    border-width: ${props => (props.position ? drawTriagleTootips[props.position][0] : null)};
    border-color: ${props => (props.position ? drawTriagleTootips[props.position][1] : null)};
    position: absolute;
    top: ${props => (props.position === 'top' ? '100%' : null)};
    bottom: ${props => (props.position === 'bottom'
        ? '100%' : props.position === 'right' || props.position === 'left'
            ? '50%' : null)};
    left: ${props => (props.position === 'top' || props.position === 'bottom'
        ? '50%' : props.position === 'left'
            ? '100%' : null)};
    right: ${props => (props.position === 'right'
        ? '100%' : null)};
    transform: ${props => (props.position === 'top' || props.position === 'bottom'
        ? 'translate(-50%)' : props.position === 'right' || props.position === 'left'
            ? 'translateY(50%)' : null)};
    pointer-events:none;
`;
