import React from 'react';
import styled from 'styled-components';

const theme = {
    default: ['white', 'black'],
};
const Myul = styled.ul`
    list-style-type:none;
    display:flex;
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
    function addLiElement(e, checkActive) {
        if (checkActive === true) {
            return <Li variant={variant} active>{e}</Li>;
        }
        return <Li variant={variant}>{e}</Li>;
    }
    const arrCheckCurrent = totalArray.map((_e, eindex) => (
        current - 1 === eindex
            ? addLiElement(totalArray[eindex], true)
            : addLiElement(totalArray[eindex])
    ));
    function cutArray(...Arr) {
        if (arrayLength > max) {
            if ((current < max / 2)) {
                arrayLi = arrCheckCurrent.slice(0, max - 2);
                return (
                    <>
                        { arrayLi }
                        {addLiElement('...')}
                        {addLiElement(totalArray[arrayLength - 1])}
                    </>
                );
            }
            if ((current > (arrCheckCurrent.length - max / 2))) {
                arrayLi = arrCheckCurrent.slice(arrCheckCurrent.length - max + 2,
                    arrCheckCurrent.length);
                return (
                    <>
                        {addLiElement(totalArray[0])}
                        {addLiElement('...')}
                        {arrayLi}
                    </>
                );
            }
            arrayLi = arrCheckCurrent.slice(current - max / 2 + 2, current + max / 2 - 2);
            return (
                <>
                    {addLiElement(totalArray[0])}
                    {addLiElement('...')}
                    { arrayLi }
                    {addLiElement('...')}
                    {addLiElement(totalArray[arrayLength - 1])}
                </>
            );
        }
        arrayLi = Arr;
        return arrayLi;
    }
    if ((current > total) || (current < 1)) return null;
    return (
        <div>
            <Myul
                onChange={onChange}
            >
                {addLiElement(<>&lt;</>)}
                {cutArray(arrCheckCurrent)}
                {addLiElement(<>&gt;</>)}
            </Myul>
        </div>
    );
}

Pagination.defaultProps = {
    max: 7,
    current: 1,
    pageSize: 10,
    onChange: null,
    variant: 'default',
};
