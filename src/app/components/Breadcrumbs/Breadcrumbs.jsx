import React from 'react';
import styled from 'styled-components';

const theme ={
    inactive:['#cbcbcb','white'],
    active:['#4c4c4c','white'],
}
const Mya = styled.a`
display:inline-block;
color:${props => (theme[props.state][0])};
text-decoration:none;
position:relative;
text-transform: capitalize;
padding-left: 10px;
font-weight:600;
font-size:15px;
font-family:Helvetica;
margin: 0 0 0 10px;

:hover{
    color:#186af8;
};

:before{
    content:"/";
    position:relative;
    margin-right:10px;
    color:#cbcbcb;
};

:first-child:before{
    content:"";

}

:after{
    content:"";
    position:relative;
    display:inline-block;
};


`
const Mynav = styled.nav`
    position:absolute;
    height:100px;
`


export default function Breadcrumbs(props) { 
    let arrayItems = props.routes.map((e,eindex) => {
            return props.activeItem == eindex ?
                <Mya href = {e.href} state ='active'>{e.name}</Mya>
                :
                <Mya href = {e.href} state ='inactive' >{e.name}</Mya>
                
    })
    
    return(
    <div>
        <Mynav>
            {arrayItems}
        </Mynav>
    </div>
    );  
}