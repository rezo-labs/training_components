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
    const [isDisableValue, setIsDisableValue] = useState(false);
    /* handle onclick items: */
    const handleFocusOnclick = (e) => {
        e.target.parentNode.focus();
        // content contains text content the items
        console.log('changecurrent', changeCurrent);
        const content = e.target.textContent;
        if (content === '>') return null;
        if (content === '<') {
            console.log('changeCurrentLessthan', changeCurrent);
            e.target.parentNode.focus();
            setChangeCurrent(changeCurrent - 1);
            
            if (changeCurrent <= 1) {
                setIsDisableValue(true);
                return null;
            }
            setIsDisableValue(false);
            return null;
        }
        if (onChange) {
            onChange(changeCurrent, pageSize);
        }
        setIsDisableValue(false);
        return null;
    };
    let totalArray = Array(arrayLength);
    /* add items to array */
    if (component) {
        totalArray = [...totalArray.keys()].map((e, eindex) => (component(eindex + 1)));
        // for (let i = 0; i < arrayLength; i += 1) {
        //     totalArray[i] = component(i + 1);
        // }
    }
    else {
        for (let i = 0; i < arrayLength; i += 1) {
            totalArray[i] = i + 1;
        }
    }
    /* handle onkeydowwn event */
    const handlekeydown = (e) => {
        if ((e.keyCode === 65) || (e.keyCode === 37)) {
            setChangeCurrent(changeCurrent - 1);
            if (changeCurrent <= 1) {
                setChangeCurrent(1);
            }
        }
        if ((e.keyCode === 68) || (e.keyCode === 39)) {
            setChangeCurrent(changeCurrent + 1);
            if (changeCurrent >= totalArray.length) {
                setChangeCurrent(totalArray.length);
            }
        }
        return null;
    };
    /* Add button element to array */
    function addButtonItemsElement(e, eKeyValue, checkActive) {
        if (checkActive === true) {
            return (
                <ButtonItem
                    variant={variant}
                    active
                    key={eKeyValue}
                    onClick={handleFocusOnclick}
                >
                    {e}
                </ButtonItem>
            );
        }
        if (eKeyValue === 'lessThan') {
            // if (changeCurrent <= 1) {
            //     return (
            //         <ButtonItem
            //             variant={variant}
            //             isDisabled
            //             onClick={handleFocusOnclick}
            //         >
            //             {e}
            //         </ButtonItem>
            //     );
            // }
            return (
                <ButtonItem
                    variant={variant}
                    key={eKeyValue}
                    onClick={handleFocusOnclick}
                    isDisabled={isDisableValue}
                    // onClick={(event) => {
                    //     if (onChange) {
                    //         onChange(changeCurrent - 1, pageSize);
                    //     }
                    //     setChangeCurrent(changeCurrent - 1);
                    //     event.target.parentNode.focus();
                    // }}
                >
                    {e}
                </ButtonItem>
            );
        }
        if (eKeyValue === 'greaterThan') {
            if (changeCurrent > totalArray.length - 1) {
                return (
                    <ButtonItem
                        variant={variant}
                        isDisabled
                        onClick={handleFocusOnclick}
                    >
                        {e}
                    </ButtonItem>
                );
            }
            return (
                <ButtonItem
                    variant={variant}
                    key={eKeyValue}
                    onClick={(event) => {
                        if (onChange) {
                            onChange(changeCurrent + 1, pageSize);
                        }
                        setIsDisableValue(false);
                        setChangeCurrent(changeCurrent + 1);
                        event.target.parentNode.focus();
                    }}
                >
                    {e}
                </ButtonItem>
            );
        }
        if (e === '...') return <ButtonItem variant={variant} key={eKeyValue} onClick={handleFocusOnclick}>{e}</ButtonItem>;
        return (
            <ButtonItem
                variant={variant}
                key={eKeyValue}
                onClick={(event) => {
                    setChangeCurrent(eKeyValue + 1);
                    event.target.parentNode.focus();
                    if (onChange) {
                        onChange(eKeyValue + 1, pageSize);
                    }
                }}
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
};

Pagination.propsType = {
    // Type Number:
    current: PropsType.number,
    pageSize: PropsType.number,
    total: PropsType.number,
    max: PropsType.number,
    // Type String:
    vaiant: PropsType.string,
    // Custom pagination -- pass anything to render your pagination
    component: PropsType.node,
    // function onChange call wwhen current page changed
    onChange: PropsType.func,
};
