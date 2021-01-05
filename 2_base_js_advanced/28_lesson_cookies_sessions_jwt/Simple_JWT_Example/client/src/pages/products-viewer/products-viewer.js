import React, { Component } from 'react';
import axios from 'axios'
import ProductList from '../../components/products-list'
class ProductsViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        axios.get('http://localhost:3000/api/products')
        .then(res=>res.data)
        .then(products=>{
            this.setState({
                products
            })
        })
        .catch((err)=>{
            console.log('Fetch error:',err)
        })
    }
    onEdit=(productId)=>{
        this.props.history.push(`/products/edit/${productId}`)
    }
    onDelete=(productId)=>{
        axios.delete(`http://localhost:3000/api/products/${productId}`)
        .then(()=>console.log('deleted'))
        .catch((err)=>{
            console.log(err)
        })
        this.props.history.push(`/`)
    }
    render() { 
        const {products}=this.state
        return ( 
            <ProductList products={products} onEdit={this.onEdit} onDelete={this.onDelete}/>
         );
    }
}
 
export default ProductsViewer;