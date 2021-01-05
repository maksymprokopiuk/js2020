import React, { Component } from 'react';
import axios from 'axios'

class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state={
            errorMsg:''
        }

    }
    componentDidMount(){
        const productId=this.props.match.params.productId
        axios.get(`http://localhost:3000/api/products/${productId}`)
        .then(res=>res.data)
        .then(product=>{
            this.refs.title.value=product.title
            this.refs.price.value=product.price
            this.refs.count.value=product.count      
            this.id=product._id      
        })
        .catch((err)=>{
            console.log('Fetch error:',err)
        })
    }
    sendData=(e)=>{
        e.preventDefault()
        const newProduct={
            'productid':this.id,
            'title':this.refs.title.value,
            'price':this.refs.price.value,
            'count':this.refs.count.value
        }
        axios.put('http://localhost:3000/api/products',newProduct)
        .then(()=>{
            this.props.history.push('/')
        })
        .catch((err)=>{
            this.setState({
                errorMsg:err.message
            })
        })
    }
    render() { 
        const {errorMsg}= this.state
        return (
        <>
            <form >
            <label>
                Title:
                <input ref="title" name='title'/>
            </label>
            <label>
                Price:
                <input ref="price" name='price' type='number' />
            </label>
            <label>
                Count:
                <input ref="count" name='count' type='number' />
            </label>
            <input type='submit' value='send' onClick={(e)=>this.sendData(e)}/>        
        </form>
            {
                errorMsg?errorMsg:''
            }
    </>
         );
    }
}
 
export default EditProduct;