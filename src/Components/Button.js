const Button = (props) => {
  let d=props.data_dismiss;
  let t=props.data_toggle;
        if(d)
        {
          return ( <button className={`btn ${props.className}`} data-dismiss={props.data_dismiss} onClick={props.onClick}>
          {props.children}
         </button>)
        }
      if(t) {
        return(<button type="button" className={`btn ${props.className}`}  data-toggle={props.data_toggle} data-target={props.data_target} onClick={props.onClick}>
          {props.children}
        </button> )
       }
       
       return(<button type="button" disabled={props.disable} className={`btn ${props.className}`} onClick={props.onClick}>
          {props.children}
        </button> )   
  }
  
  export default Button;