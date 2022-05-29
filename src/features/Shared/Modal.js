import React from 'react'

function Modal(props) {
    // const [mdesc, smdesc] = useState();
    // console.log("Modal",props)
   
    const  {id, title, description, image} = props.product
  
    // useEffect(()=>{
    //     if(desc !== ""){
    //         console.log("if desc",desc);
    //         smdesc(desc)
    //     }
    // },[desc])
    
  return (
  
    <div className="modal fade col-md-12 col-sm-12" id={props.modalId} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
      <p><img src={image} alt="" /></p>
            <p>{description}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Modal