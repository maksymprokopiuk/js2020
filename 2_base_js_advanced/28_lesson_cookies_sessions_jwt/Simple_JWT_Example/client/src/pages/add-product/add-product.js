import React, { Component } from 'react';
import axios from 'axios'
 class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state={
            errorMsg:''
        }

    }
    sendData=(e)=>{
        e.preventDefault()
        const newProduct={
            'title':this.refs.title.value,
            'price':this.refs.price.value,
            'count':this.refs.count.value
        }
        axios.post('http://localhost:3000/api/products',newProduct)
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


// const AddProduct = () => {

//     return ( 
//     <form action='http://localhost:3000/api/products' method='post'>
//         <label>
//             Title:
//             <input name='title'/>
//         </label>
//         <label>
//             Price:
//             <input name='price' type='number'/>
//         </label>
//         <label>
//             Count:
//             <input name='count' type='number'/>
//         </label>
//         <input type='submit' value='send'/>        
//     </form> );
// }
 
export default AddProduct;