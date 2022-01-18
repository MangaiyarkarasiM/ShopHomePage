import Card from './Card'

function Products(props){
   return(
      <div className="container my-5">
          <div className="row justify-content-center">
          {
              props.data.map((item)=>{
                return (<Card key={item.id} data={item} onAdd={props.onAdd} cartItemsIds={props.cartItemsIds}></Card>)
            })
          }
          </div>
      </div>
   )            
}

export default Products;