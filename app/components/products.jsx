function Product(props){
    return(
        <div>
            <p>Name: {props.data.name}</p>
        <p>price: {props.data.price}</p>
        </div>
    )
}
export default Product;