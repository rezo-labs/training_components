import React, { useState } from 'react';
import PropsType from 'prop-types';
import { ListButtonsItem, HandleError, ButtonItem } from './style_Pagination';

export default function Pagination(props) {
    const {
        pageSize, current, total, variant, max, component, onChange,
    } = props;
    const [changeCurrent, setChangeCurrent] = useState(current);
    const arrayLength = Math.floor((total - 1) / pageSize) + 1;
    let arrayButtonItems = [];
    /* handle onclick item: */
    // const handleFocusOnclick = (e) => {
    function handleFocusOnclick(e, eindex) {
        e.target.parentNode.focus();
        const textConvertToInt = parseInt(e.target.textContent, 10); // convert text to int
        const content = e.target.textContent; // content contains text content of the item
        // when clicks the next item
        if (content === '>') {
            if (changeCurrent === arrayLength) return null; // check whether the first item or not ?
            setChangeCurrent(changeCurrent + 1);
            if (onChange) onChange(changeCurrent + 1, pageSize);
            return null;
        }
        // when click the previous item
        if (content === '<') {
            if (changeCurrent === 1) return null; // check whether the last item or not ?
            setChangeCurrent(changeCurrent - 1);
            if (onChange) onChange(changeCurrent - 1, pageSize);
            return null;
        }
        // to not return onChange event when click continously
        if (onChange) onChange(textConvertToInt, pageSize);
        e.target.parentNode.focus();
        setChangeCurrent(eindex + 1);
        return null;
    }
    let totalArray = Array(arrayLength);
    /* add items to array */
    if (component) {
        totalArray = [...totalArray.keys()].map((_e, eindex) => (component(eindex + 1)));
    }
    else {
        totalArray = [...totalArray.keys()].map((_e, eindex) => (eindex + 1));
    }
    /* handle onkeydowwn event */
    const handlekeydown = (e) => {
        if ((e.keyCode === 65) || (e.keyCode === 37)) {
            if (changeCurrent <= 1) {
                setChangeCurrent(1);
                return null;
            }
            if (onChange) onChange(changeCurrent - 1, pageSize);
            setChangeCurrent(changeCurrent - 1);
        }
        if ((e.keyCode === 68) || (e.keyCode === 39)) {
            if (changeCurrent >= totalArray.length) {
                setChangeCurrent(totalArray.length);
                return null;
            }
            if (onChange) onChange(changeCurrent + 1, pageSize);
            setChangeCurrent(changeCurrent + 1);
        }
        return null;
    };
    /* Add button element to array */
    function addButtonItemsElement(e, eKeyValue, checkActive) {
        // return current button
        if (checkActive === true) {
            return (
                <ButtonItem
                    variant={variant}
                    active
                    key={eKeyValue}
                    onClick={event => handleFocusOnclick(event, eKeyValue)}
                >
                    {e}
                </ButtonItem>
            );
        }
        // return button Previous
        if (eKeyValue === 'lessThan') {
            return (
                <ButtonItem
                    variant={variant}
                    key={eKeyValue}
                    onClick={handleFocusOnclick}
                    isDisabled={changeCurrent <= 1}
                >
                    {e}
                </ButtonItem>
            );
        }
        // return button Next
        if (eKeyValue === 'greaterThan') {
            return (
                <ButtonItem
                    variant={variant}
                    key={eKeyValue}
                    onClick={handleFocusOnclick}
                    isDisabled={changeCurrent >= arrayLength}
                >
                    {e}
                </ButtonItem>
            );
        }
        // return ellipsis items
        if (e === '...') return <ButtonItem variant={variant} key={eKeyValue} ellipsis>{e}</ButtonItem>;
        // return default button
        return (
            <ButtonItem
                variant={variant}
                key={eKeyValue}
                onClick={event => handleFocusOnclick(event, eKeyValue)}
            >
                {e}
            </ButtonItem>
        );
    }
    /* check status current in pagination */
    const arrCheckCurrent = totalArray.map((_e, eindex) => (
        changeCurrent - 1 === eindex
            ? addButtonItemsElement(totalArray[eindex], eindex, true)
            : addButtonItemsElement(totalArray[eindex], eindex)
    ));
    /* Handle Truncate pagination */
    function cutArray(...Arr) {
        if (arrayLength > max) {
            if ((changeCurrent < max / 2)) {
                arrayButtonItems = arrCheckCurrent.slice(0, max - 2);
                return (
                    <>
                        { arrayButtonItems }
                        {addButtonItemsElement('...', 'elipsic')}
                        {addButtonItemsElement(totalArray[arrayLength - 1], arrayLength - 1)}
                    </>
                );
            }
            if ((changeCurrent > (arrCheckCurrent.length - max / 2))) {
                arrayButtonItems = arrCheckCurrent.slice(arrCheckCurrent.length - max + 2,
                    arrCheckCurrent.length);
                return (
                    <>
                        {addButtonItemsElement(totalArray[0], 0)}
                        {addButtonItemsElement('...', 'elipsic')}
                        {arrayButtonItems}
                    </>
                );
            }
            arrayButtonItems = arrCheckCurrent.slice(changeCurrent - max / 2 + 2,
                changeCurrent + max / 2 - 2);
            return (
                <>
                    {addButtonItemsElement(totalArray[0], 0)}
                    {addButtonItemsElement('...', 'elipsic')}
                    { arrayButtonItems }
                    {addButtonItemsElement('...', 'elipsic1')}
                    {addButtonItemsElement(totalArray[arrayLength - 1], arrayLength - 1)}
                </>
            );
        }
        arrayButtonItems = Arr;
        return arrayButtonItems;
    }
    /* Handle error input */
    if (current > total) {
        console.error('Error: cannot set current > total');
        return (
            <HandleError>
                {'Error: cannot set current >  total !'}
            </HandleError>
        );
    }
    if (current < 1) {
        console.error('Error: cannot set current < 1');
        return (
            <HandleError>
                {'Error: cannot set current < 1 !'}
            </HandleError>
        );
    }
    /* Render Pagination */
    return (
        <div>
            <ListButtonsItem
                onKeyDown={handlekeydown}
                tabIndex={0}
                className="focus"
                id="focus"
            >
                {addButtonItemsElement(<>&lt;</>, 'lessThan')}
                {cutArray(arrCheckCurrent)}
                {addButtonItemsElement(<>&gt;</>, 'greaterThan')}
            </ListButtonsItem>
        </div>
    );
}

Pagination.defaultProps = {
    max: 7,
    current: 1,
    pageSize: 10,
    variant: 'default',
    total: null,
    component: null,
    onChange: null,
};

Pagination.propTypes = {
    /**  the active item in Pagination */
    current: PropsType.number,
    /**  Number of item per page */
    pageSize: PropsType.number,
    /**  total of Items */
    total: PropsType.number,
    /**  defines max item render in browser */
    max: PropsType.number,
    /**  define color in pagination */
    variant: PropsType.string,
    /** Custom pagination - Custom component to be rendered in the pagination. */
    component: PropsType.func,
    /** function onChange call wwhen current page changed */
    onChange: PropsType.func,
};
