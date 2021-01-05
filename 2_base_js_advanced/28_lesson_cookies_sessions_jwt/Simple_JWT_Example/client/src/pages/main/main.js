import React, { Component } from 'react';
import ProductsViewer from '../products-viewer'
import AddProduct from '../add-product'
import {Link, Route,Switch, Redirect} from 'react-router-dom';
import EditProduct from '../edit-product/edit-product';
import Home from '../home'
import authRequired from '../../utils/authRequired'
import Login from '../login'
import Signup from '../signup'

class Main extends Component {
    constructor(props) {
        super(props);
    }
    logout=()=>{
        this.props.unsetUser()
    }
    render() { 
        const {isAuth}=this.props
        return ( 
            <>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/products/add">Add</Link></li>                        
                    </ul>
                    {
                        !isAuth?(
                        <>
                         <button>
                            <Link to="/login">Login</Link>
                         </button>
                         <button>
                            <Link to="/signup">Signup</Link>
                         </button>                         
                        </>
                        ):
                        <button onClick={this.logout}>Logout</button>
                    }
                </div>
                <hr/>
                <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/products" exact component={ProductsViewer} />
                    <Route path="/products/add" exact component={authRequired(AddProduct)} />
                    <Route path="/products/edit/:productId" exact component={authRequired(EditProduct)} />   
                    <Route path="/login" exact component={Login} />
                    <Route path="/signup" exact component={Signup} />
                    <Route component={Home} />
                </Switch>;

                </div>
            </>
         );
    }
}
 
export default Main;