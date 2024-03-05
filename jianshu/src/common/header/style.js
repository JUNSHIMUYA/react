import styled from 'styled-components'
import logoPic from '../../static/logo.png'

export const HeaderWrapper=styled.div`
z-index:1;
position:relative;
height:56px;
border-bottom:1px solid #f0f0f0;
`;

/* export const Logo=styled.a.attrs({
    href:"/"
})`
position:absolute;
top:0;
left:0;
display:block;
width:100px;
height:56px;
background:url(${logoPic});
background-size:contain
`;  */

export const Logo=styled.div`
position:absolute;
top:0;
left:0;
display:block;
width:100px;
height:56px;
background:url(${logoPic});
background-size:contain
`; 

export const Nav=styled.div`
width:960px;
height:100%;
padding-right:70px;
margin:0 auto;
box-sizing:border-box;
`;

export const NavItem=styled.div`
line-height:56px;
padding: 0 15px;
font-size:17px;
color: #333;
&.left{
    float:left;
}

&.right{
    float:right;
    color:#969696
}
&.active{
    color:#ea6f5a;
}
`;

export const NavSearch=styled.input.attrs({
    placeholder:'搜索'
})`
font-size:14px;
margin-top:9px;
margin-left:20px;
padding:0 30px 0 20px;
color:#666;
box-sizing:border-box;
width:160px;
height:38px;
border:none;
outline:none;
border-radius:19px;
background:#eee;
&::placeholder{
    color:#999
}
&.focused{
    width:240px;
}
&.slide-enter{
    transition:all .2s ease-out;
    }
&.slide-enter-active{
    width:240px;
    }
&.slide-enter-exit{
        width:160px;
        transition:all .2s ease-out;
    }
`;


export const Addition=styled.div`
position:absolute;
right:0;
height:56px;
top:0;

`;

export const Button=styled.div`
float:right;
margin-top:9px;
margin-right:20px;
padding:0 20px;

line-height:38px;
border-radius:19px;
border:1px solid #ec6149;
&.reg{
    color:#ec6149;
    
}
&.writting{
    color:#fff;
    background:#ec6149
}
font-size:14px;
`;

export const SearchWrapper=styled.div`
float:left;
position:relative;
.zoom{
    position:absolute;
    right:5px;
bottom:5px;
width:30px;
line-height:30px;
border-radius:15px;
text-align:center;
background:green;
&.focused{
    background:#777;
    color:#fff;
}
}


`;

export const SearchInfo=styled.div`
position:absolute;
left:0;
top:56px;
width:240px;
padding:0 20px;
background:#fff;
box-shadow:0 0 8px rgba(0,0,0,.2)
`;
export const SearchInfoTitle=styled.div`
margin-top:20px;
margin-bottom:15px;
line-height:20px;
color:#969696;
font-size:14px;

`;
export const SearchInfoSwitch=styled.span`
cursor:pointer;
float:right;
font-size:13px;
.spin{
    display:block;
    float:left;
    font-size:12px;
    margin-right:2px;
    transition:all .2s ease-in;

    transform-origin:center center;
}
`;

export const  SearchInfoItem=styled.a`
display:block;
float:left;
padding:0 5px;
line-height:20px;
font-size:12px;
border: 1px solid #ddd;
color:#787878;
border-radius:3px;
margin-right:10px;
margin-bottom:10px;
`;

export const SearchInfoList=styled.div`
overflow:hidden;
`;