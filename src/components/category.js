import './cat.css';
import { Catego } from './design.styled';
import { Footer } from './footer';
import { useHistory } from 'react-router-dom';


export const Category = () =>{


    const history = useHistory();

    return (
        <div>
            <section className='p-5 container'>
           <Catego className='row' >
               <div className='col-6'>
               <h5> Product Categories </h5>
                <p>
                    Make your gadget shopping easy by ordering from Elite Technology
                </p>
                <p>Shop your Laptops, Phones , Accessories , Desktops and other electronic gadget here..</p>
                <p> Brand new and extremely clean U.K used gadget available, with warranty   </p>
               </div>

            <div className='col-6' >
                <h6 className='head' >
                    Electronics
                </h6>
                <ul>
                 <li onClick={() =>history.push('/phones')} >Phones</li>   
                 <li onClick={() =>history.push('/laptops')}   >Laptops</li>  
                 <li onClick={() =>history.push('/desktop')}  >Desktops</li> 
                 <li onClick={() =>history.push('/accessories')}  >Accessories</li> 
                </ul>
            </div>

           </Catego>
           </section>
           <Footer />
        </div>
    )
}