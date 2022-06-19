import React from 'react'
import Cart from '../CartButton/CartButton';
import Modal from './Modal';

function Products(props) {
    console.log("product",props.items);
    // const [Des, setDesc] = useState("");
    // const [pr, setPr] = useState();
    // const itme = props.items;
    
    // useEffect(() => {
    //   setPr(props.values)
    // },[])
    // console.log(pr)
    const  {id, title, description, image} = props.items
    const customModalId = '#CSCZ'+id;   
    const ModalId = 'CSCZ'+id;   
 
  return (
<>
  <Modal  product={props.items} modalId={ModalId}/>

<div  className='card col-md-3 col-sm-12 col-xs-12 m-3'>
  <img src={image} className="card-img-top image-size" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text desc-text">{description}</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
  <div className="row">
    <div className="col-md-6 col-sm-6 col-xs-6">
      <Cart cartItem={props.items}/>
    </div>
    <div className="col-md-6">

      <button id={id} data-bs-toggle="modal" className='btn' type="button"  data-bs-target={customModalId}>View Details</button>
    </div>
  </div>
</div>
{/* 
  <div className="modal fade" id={ModalId} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
      
            <p>{description}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>      */}
</>
  )
}

export default Products