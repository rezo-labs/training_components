import React from 'react';
import styled from 'styled-components';
import PropsType from 'prop-types';

const theme = {
    default: ['white', 'black'],
};
const Myul = styled.ul`
    list-style-type:none;
    display:flex;
`;
const HandleError = styled.h1`
    color: red;
`;
const Li = styled.li`
    padding: 8px;
    white-space: nowrap;
    margin: 0;
    font-weight: bold;
    font-size: 18px;
    background: ${props => (props.active ? '#007bff' : theme[props.variant][0])};
    color: ${props => (props.active ? 'white' : theme[props.variant][1])};
    border-radius: 5px;
    :hover{
        background: ${props => (props.active ? '#0056b3' : '#e6e6e6')};
    }
    height:fit-content;
`;
export default function Pagination(props) {
    const {
        current, pageSize, total, variant, onChange, max, component,
    } = props;
    let page = 1;
    const totalArray = [];
    const arrayLength = total / pageSize;
    let arrayLi = [];
    if (component) {
        for (let i = 0; i < arrayLength; i += 1) {
            totalArray[i] = component(page);
            page += 1;
        }
    }
    else {
        for (let i = 0; i < arrayLength; i += 1) {
            totalArray[i] = i + 1;
        }
    }
    function addLiElement(e, eKeyValue, checkActive) {
        if (checkActive === true) {
            return <Li variant={variant} active key={eKeyValue}>{e}</Li>;
        }
        return <Li variant={variant} key={eKeyValue}>{e}</Li>;
    }
    const arrCheckCurrent = totalArray.map((_e, eindex) => (
        current - 1 === eindex
            ? addLiElement(totalArray[eindex], eindex, true)
            : addLiElement(totalArray[eindex], eindex)
    ));
    function cutArray(...Arr) {
        if (arrayLength > max) {
            if ((current < max / 2)) {
                arrayLi = arrCheckCurrent.slice(0, max - 2);
                return (
                    <>
                        { arrayLi }
                        {addLiElement('...', 'elipsic')}
                        {addLiElement(totalArray[arrayLength - 1], arrayLength - 1)}
                    </>
                );
            }
            if ((current > (arrCheckCurrent.length - max / 2))) {
                arrayLi = arrCheckCurrent.slice(arrCheckCurrent.length - max + 2,
                    arrCheckCurrent.length);
                return (
                    <>
                        {addLiElement(totalArray[0], 0)}
                        {addLiElement('...', 'elipsic')}
                        {arrayLi}
                    </>
                );
            }
            arrayLi = arrCheckCurrent.slice(current - max / 2 + 2, current + max / 2 - 2);
            return (
                <>
                    {addLiElement(totalArray[0], 0)}
                    {addLiElement('...', 'elipsic1')}
                    { arrayLi }
                    {addLiElement('...', 'elipsic2')}
                    {addLiElement(totalArray[arrayLength - 1], arrayLength - 1)}
                </>
            );
        }
        arrayLi = Arr;
        return arrayLi;
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
                onChange={onChange}
            >
                {addLiElement(<>&lt;</>, 'lessThan')}
                {cutArray(arrCheckCurrent)}
                {addLiElement(<>&gt;</>, 'greaterThan')}
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
