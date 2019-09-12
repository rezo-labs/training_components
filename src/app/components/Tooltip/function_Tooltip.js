
// check visible return false if element is visibled
export function checkVisible(e) {
    if (e === 'visible') return true;
    return false;
}

const positionLookupTable = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left',
};

// call tooltips to the window
export default function openTootips(e, props) {
    const {
        position, offset, trigger, delay,
    } = props;
    const tooltipItem = e.currentTarget.children[0];
    if ((trigger === 'click') || (trigger === 'hover') || (trigger === 'focus')) {
        tooltipItem.style.visibility = 'visible';
        tooltipItem.style.zIndex = 100;
        tooltipItem.style[positionLookupTable[position]] = `calc(110% + ${offset}px)`;
        tooltipItem.style.transitionDelay = `${delay}ms`;
        return true;
    }
    return null;
}
// hide tooltips
export function exitTooltips(e) {
    const tooltipItem = e.currentTarget.children[0];
    tooltipItem.style.visibility = 'hidden';
    return false;
}
