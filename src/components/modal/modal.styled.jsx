import styled from 'styled-components/macro';

export const CustomModal = styled.div`

width: 100%;
height: 100%;
position: fixed;
top: 0;
left: 0;
z-index: 998;
background: rgba(45, 45, 53, 0.8);
opacity: 0.5;

@media(max-width: 768px) {
  
width:400px;

}   

`

export const ModalWrapper = styled.div`

width: 650px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background: #fff;
padding: 20px;
border-radius: 8px;
z-index: 999;
margin-left: ${props => props.margin};


@media(max-width: 768px) {
  
  width:400px;
  margin-left:-0.8rem;
  padding: 20px;
  }   
`


export const QuestionWrapper = styled.div`

width: 450px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background: #fff;
padding: 20px;
border-radius: 8px;
z-index: 999;
margin-left: ${props => props.margin};


@media(max-width: 768px) {
  
  width:400px;
  margin-left:-0.8rem;
  padding: 20px;
  }   
`


export const PitchModalWrapper = styled.div`

width: 1010px;

position: fixed;
top: 47%;
left: 54.2%;
transform: translate(-50%, -50%);
background: #fff;
padding: 20px;
border-radius: 8px;
z-index: 999;
margin-left: 7rem;


@media(max-width: 768px) {
  
  width:400px;
  margin-left:-0.8rem;
  padding: 20px;
  }   


`

export const CloseModal = styled.img`
    cursor: pointer;
    float: right;

    
@media(max-width: 768px) {
  margin-left:9rem;
 
  }   

`

export const ModalHeader = styled.div`

display:flex;
width:510px;


@media(max-width: 768px) {
  
  width:400px;
 
  }   
`

export const QuestionHeader = styled.div`

padding:8px;
display:flex;
width:510px;
margin-left:9rem;
margin-top:-19px;

@media(max-width: 768px) {
  
  width:400px;
 
  }   
`
export const PitchHeaderQuestion = styled.div`

padding:8px;
display:flex;
width:510px;
margin-left:0;
margin-top:-19px;

@media(max-width: 768px) {
  
  width:400px;
 
  }   
`

export const PitchModalHeader = styled.div`

padding:8px;
display:flex;
width:510px;
margin-left:-20px;
margin-top:-19px;

h5 {
  font-size:18px;
  color:#137C4B;
  margin-left:10px;
  line-height:24px;
  margin-bottom:10px;
}

@media(max-width: 768px) {
  
  width:400px;
 
  }   
`