import React, { Component } from 'react';

const ProductsList = ({products,onEdit,onDelete}) => {
    console.log('products:',products)
    return ( <table>
        <tbody>
            {
                (products && products.length)?(
                    products.map((product)=>(
                        <tr key={product._id}>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.count}</td>
                            <td>
                                <button onClick={()=>onEdit(product._id)}>
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button onClick={()=>onDelete(product._id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ):'empty'
            }
        </tbody>
    </table> );
}
 
export default ProductsList;