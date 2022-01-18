import Button from "./Button";

function CartItem(props){
  return(
    <div className="d-flex justify-content-center align-items-center mt-4">
    <div className="d-flex justify-content-start align-items-center">
      <div className="">
        <img src={props.image} className="rounded" width="70%" height="70%" alt="..."/>
      </div>
      <div>
        <p className="mt-2">{props.title}</p>
      </div>
    </div>
    <div className="flex items-top">
      <div className="ml-4">
        <Button className="btn-danger" onClick={() => {props.deleteCartItem({ id: props.id })}}>
          Remove
        </Button>
      </div>
    </div>
  </div>
  )
}

export default CartItem;