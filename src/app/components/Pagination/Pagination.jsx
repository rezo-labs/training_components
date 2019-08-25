import React, { useState } from 'react';
import PropsType from 'prop-types';
import { Myul, HandleError, ButtonItems } from './style_Pagination';


export default function Pagination(props) {
    const {
        pageSize, current, total, variant, max, component,
    } = props;
    const [changeCurrent, setChangeCurrent] = useState(current);
    const totalArray = [];
    const arrayLength = Math.floor((total - 1) / pageSize) + 1;
    let arrayButtonItems = [];
    if (component) {
        for (let i = 0; i < arrayLength; i += 1) {
            totalArray[i] = component(i + 1);
        }
    }
    else {
        for (let i = 0; i < arrayLength; i += 1) {
            totalArray[i] = i + 1;
        }
    }
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
    function addButtonItemsElement(e, eKeyValue, checkActive) {
        if (checkActive === true) {
            return (
                <ButtonItems
                    variant={variant}
                    active
                    key={eKeyValue}
                >
                    {e}
                </ButtonItems>
            );
        }
        if (eKeyValue === 'lessThan') {
            if (changeCurrent <= 1) {
                return <ButtonItems variant={variant} isDisabled>{e}</ButtonItems>;
            }
            return (
                <ButtonItems
                    variant={variant}
                    key={eKeyValue}
                    onClick={() => setChangeCurrent(changeCurrent - 1)}
                >
                    {e}
                </ButtonItems>
            );
        }
        if (eKeyValue === 'greaterThan') {
            if (changeCurrent > totalArray.length - 1) {
                return <ButtonItems variant={variant} isDisabled>{e}</ButtonItems>;
            }
            return (
                <ButtonItems
                    variant={variant}
                    key={eKeyValue}
                    onClick={() => setChangeCurrent(changeCurrent + 1)}
                >
                    {e}
                </ButtonItems>
            );
        }
        if (e === '...') return <ButtonItems variant={variant} key={eKeyValue}>{e}</ButtonItems>;
        return (
            <ButtonItems
                variant={variant}
                key={eKeyValue}
                onClick={() => setChangeCurrent(eKeyValue + 1)}
            >
                {e}
            </ButtonItems>
        );
    }
    const arrCheckCurrent = totalArray.map((_e, eindex) => (
        changeCurrent - 1 === eindex
            ? addButtonItemsElement(totalArray[eindex], eindex, true)
            : addButtonItemsElement(totalArray[eindex], eindex)
    ));
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
    return (
        <div>
            <Myul
                onKeyDown={handlekeydown}
            >
                {addButtonItemsElement(<>&lt;</>, 'lessThan')}
                {cutArray(arrCheckCurrent)}
                {addButtonItemsElement(<>&gt;</>, 'greaterThan')}
            </Myul>
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
