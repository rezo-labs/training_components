import React from 'react';
import styled from 'styled-components';

const theme ={
    inactive:['#cbcbcb','white'],
    active:['#4c4c4c','white'],
    default:['#cbcbcb']
}
const Mya = styled.a`
display:inline-block;
color:${props=>props.state ?  (theme[props.state][0]):(theme.inactive[0])};
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
    content:'${props=>props.separator}';
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
    const{isExpand,routes,href,separator}=props;
   
    let arrayItems = routes.map((e,eindex) => {
            return  eindex==routes.length-1  ?
                <Mya href = {e.href} state ='active' >{e.name}</Mya>
                :
                <Mya href = {e.href} state ='inactive' >{e.name}</Mya>
                
            })

            console.log('test1',routes.href);
            console.log('test2',separator);
    
            if(isExpand){
            return( 
            <div> 
            <Mya href ={routes[0].href} state ='inactive' separator={separator}>{routes[0].name}</Mya>
            <Mya state ='inactive' separator={separator}>...</Mya>
            <Mya href={routes[routes.length-1].href} state='active' separator={separator}>{routes[routes.length-1].name}</Mya>
            </div>
            )}
            
        
           
    return(
    <div>
        <Mynav>
            {arrayItems}
        </Mynav>
    </div>


    );  
}