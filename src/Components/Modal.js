import Button from "./Button";

const Modal = (props) => {
  if(!props.open) {
    return null;
  }
  return ( 
    <div className="modal modal-dialog-scrollable fade mt-5" id="cartModal" tabIndex="-1" aria-labelledby="cartModal" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
          <h3 id="cartModal" className="">{props.title}</h3>
        </div>
        
        <div className="modal-body py-2">
          {
            props.children
          }
        </div>
        {
          props.showFooter ? (
            <div className="px-2 my-2">
              <Button className="btn-info text-center pl-2" data_dismiss="modal" onClick={props.onClose}>Close</Button>
            </div>
          ) : null
        }
        </div>
      </div>
    </div>
  )
}

export default Modal;