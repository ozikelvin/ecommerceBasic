
import { ModalCustom  } from './modal/index';
import {Table  , Section, ModalHeader} from './design.styled';
import logo from "../lgo.jpeg";
import html2pdf from 'html2pdf.js';

export const ReceiptModal = ({closeModal, data, 
orderNum, status
}) =>{

    const downloadStatement = () => {
        const element = document.querySelector('#reci');
        
        let opt = {
          margin: 1,
          filename:'Elite Order receipt.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
          };
        
          //console.log(html2pdf().from(element).set(opt).save())
        
          return  html2pdf().from(element).set(opt).save();
    
        }

    return (
        <ModalCustom closeModal={closeModal}  >
            <Section >
            <div id='reci' >
            <ModalHeader className='' >
          <div className='d-flex' style={{marginLeft:'20px'}} > 
          <span><img src={logo} alt="store" style={{width:'60px', height:'60px'}} className="border img-thumbnail rounded-circle" /></span>
          <span className='text-nowrap mx-3 my-3' style={{fontWeight:'700'}} >Elite Technologies Order Receipt   </span>
           </div>
        </ModalHeader>
        <div className='d-flex'>
           <p className='text-nowrap text-capitalize mx-2 ' style={{fontWeight:'500'}} >Reference : </p>
               <span  className='text-nowrap ' style={{fontWeight:'500', letterSpacing:'3px'}} > {orderNum} </span>
           </div>
           <div>
               <p className='text-nowrap text-capitalize mx-2 ' > Order Status <span style={{color:status === 'Failed' ? '#981220' : status === 'Successful' ? '#129812' : '#000' , fontSize:'20px', fontWeight:'600', 
               letterSpacing:'3px'
               }} > { status } </span>  </p>  
           </div>
                <Table className="table table-striped" >
                <thead className="" >
      <tr>
       
        <th>Product Name</th>
        <th>Product Desc </th>
        <th>Product Price </th>
        <th>Product Color </th>
        <th>Product Qty </th>
        <th>Total </th>
      </tr>
    </thead  >

    <tbody>
        {
            data && data.map((info) =>(
            <tr key={info}>
                <td> { info?.title } </td>
                <td> { info?.description } </td>
                <td> { info?.price } </td>
                <td> { info?.color } </td>
                <td> { info?.count } </td>
                <td> { info?.total } </td>
            </tr>
            ))
        }
    </tbody>

                </Table>
                </div>
                <button onClick={downloadStatement} >
                 Download receipt
                </button>
            </Section>
        </ModalCustom>
    )
}