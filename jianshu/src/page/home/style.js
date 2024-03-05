import styled from 'styled-components'

export const HomeWrapper=styled.div`
width:960px;
margin:0 auto;
overflow:hidden;
`;

export const Homeleft=styled.div`
width:625px;
float:left;
margin-left:15px;
padding-top:30px;
`;

export const Homeright=styled.div`
width:280px;
float:right;
`;

export const TopicWrapper=styled.div`
padding:20px 0 10px 0;
overflow:hidden;
margin-left:-18px;
border-bottom:1px solid #dcdcdc;
`;

export const Topicitem=styled.div`
padding:0 10px;
margin-left:18px;
float:left;
height:32px;
line-height:32px;
background:#f7f7f7;
color:#000;
border:1px solid #dcdcdc;
border-redius:4px;
font-size:14px;
.topic-pic{
    width:32px;
    height:32px;
    display:block;
    float:left;
};
margin-bottom:18px;
`;

export const Listitem=styled.div`
overflow:hidden;
padding:20px 0;
border-bottom:1px solid #dcdcdc;
.pic{
    width:125px;
    height:100px;
    display:block;
    float:right;
    border-radiux:10px;
}
`;

export const Listinfo=styled.div`
width:500px;
float:left;
.title{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;

}
.desc{
    font-size:13px;
    line-height:24px;
    coler:#999;
}
`;
export const Recommend=styled.div`
margin:30px 0;
width:280px;
`;

export const Recommenditem=styled.div`
width:280px;
height:100px;
background:url(${(props)=>props.imgurl});
backround-size:contain;
`;

export const Writerwrapper=styled.div`
width:278px;
height:300px;
border:1px solid #dcdcdc;
border-radius:3px;
line-height:300px;
text-align:center;
`;

export const Loadmore=styled.div`
width:100%;
height:40px;
cursor:pointer;
border-radius:20px;
line-height:40px;
text-align:center;
background:#a5a5a5;
color:#fff;
margin:30px 0;
`;

export const BackTop=styled.div`
position:fixed;
right:100px;
top:600px;
bottom:100px
width:60px;
height:60px;
line-height:60px;
text-align:center;
border:1px solid #ccc;
font-size:14px;
`;