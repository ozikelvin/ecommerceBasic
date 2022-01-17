import styled from 'styled-components/macro';

export const Header = styled.div`



h4{
    color:#fff;
    font-size:3.3rem;
    border-radius:10px;
    padding:10px;
    margin-left:30%;
    width:80%;
}

`

export const Form = styled.form`

background:#636363;
width:95%;
padding:20px;
border-radius:10px;


label {
    color:#000;
    line-height:30px;
    font-size:25px;
}

input {

    background:#f2f2f2;
    width:80%;
    border:none;
    border-radius:10px;
}
textarea {
    background:#f2f2f2;
    width:80%;
    border:none;
    border-radius:10px;  
}

.label {
    background:#284398;
    width:70%;
    border:none;
    border-radius:10px; 
    color:#fff; 
    padding:10px; 
}


`

export const DashBoardHeader = styled.div`

width:100%;
padding:16px;
margin-left:2%;
border-radius:10px;
background:#f5f5f5;

h4 {
    color:#090909;
    font-size:2.3rem;
    padding:10px;
   
    width:90%;
    font-weight:700;
}

p {
    color:#353598;
    font-size:1rem;
    padding:10px;
    
    width:59%; 
    margin-top:19px;
}

img {
    width:350px;
    height:310px;
    border-radius:12px;
}


`

export const PageWrapper = styled.div`
width: 80%;
height: 400px;
 background-size: cover;
 background-image:linear-gradient(0deg, rgba(9, 9, 9, 0.7), rgba(9, 9, 9, 0.7)), url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpaperaccess.com%2Fe-commerce&psig=AOvVaw1VB0d5ArRR2kp_86qfoZR7&ust=1640436690588000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjsqIS9_PQCFQAAAAAdAAAAABAD);

`

export const ProductWrap = styled.div`

background:#636363 ;
padding:20px;
border-radius:12px;
width:1000px;
margin-left:6rem;

`

export const Button = styled.button`
background:#fff;
border:none;
border-radius:8px;
padding:6px 12px;
color:#535353;
width:25%;
margin-left:40%;

&:hover {
    background:#353399;
    color:#fff;
}

`
export const Catego = styled.div`

display:flex;

h5 {
    color:#fff;
    font-size:29px;
    margin-bottom:22px;
}

p {
    color:#fff;
    font-size:17px;
    width:70%;
    line-height:140%;
    margin-top:5px;
}

.head {
    background:#453578;
    color:#fff;
    border-radius:8px 8px 0 0;
    padding:8px 15px;
    font-size:19px;
    width:500px;
    text-align:center;
}

ul {
    background:#fff;
    width:500px;
   
    border-radius:0 0 10px 10px;
  margin-top:-0.4rem;
    li {
        border:none;
        color:#271898;
        padding:15px;
        font-size:19px;

        line-height:140%;
        box-shadow: 0px 4px 18px -2px rgba(86, 87, 88, 0.12);
       ;

        &:hover {
            background:#271898; 
            color:#fff;
            transition:0.5s;
            border-radius:7px;
        }
    
    }

 

}

`

export const CustCard = styled.div`

background:#fff;
border-radius:10px;
box-shadow: 0px 4px 18px -2px #768798;



img {

    width:80px;
    height:80px;
    border-radius:4px;
    margin-left:25%;
    
}

.p{
    font-weight:700;
    font-size:15px;
    line-height:30px;
    margin-left:2rem;
}

.checked {
  color: orange;
}

.span {
    font-weight:500;
    font-size:1rem;
    line-height:30px;
}


`

export const DetailWrapper = styled.div`

color:#fff;

p {
    color:#fff;
}

h2 {
    color:#fff; 
}

h4 {
    color:#867200; 
}
h1 {
    color:#fff; 
}
span {
    color:#fff; 
}

img {
    width:270px;
    height:230px;
    border-radius:10px;
   
}

span {
    color:#fff;
}

`

export const Table = styled.table`

margin-top:1.3rem;

thead {
background: #F8F8FA;

padding:10px;
    tr {
        border-radius:12px;
    }
    th {
font-weight: 500;
font-size: 16px;
line-height: 140%;
color: #9B9DC3;

    }
}



`

export const Section = styled.section`

margin-top:1.3rem;

h4 {
font-family: DM Sans;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 31px;
display: flex;

letter-spacing: 0.01em;
color:#182399;
}

button {

padding:6px 12px;
border-radius:8px;
background:#272598;
color:#fff;
margin-top:1.6rem;
border:none;
box-shadow: 0px 4px 6px -2px #768798;
}

`
export const ModalHeader = styled.div`



padding:8px;
display:flex;
width:510px;
margin-left:-20px;



@media(max-width: 768px) {
  
  width:400px;
 
  }   
`
