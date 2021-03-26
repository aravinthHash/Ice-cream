import React from 'react';
import {withRouter} from 'react-router-dom';
import './home.css'

class Home extends React.Component {
    routeBasedOnUser(fromPath) {
        const state = fromPath === "delivery" ? {from: "Delivery-Boy Login"} : fromPath === "Customer Login" ? {from: "customer"} : {from: "Admin Login"};
        const path = fromPath === "customer" ? "/customer" : "/login";
        this.props.history.push({
            pathname: path,
            state: state
        });
    }
    render() {
        return <div>
            <div class="button button1 text-word" onClick={() => this.routeBasedOnUser('delivery') }>Delivery Boy</div>

            <div class="button button2 text-word" onClick={() => this.routeBasedOnUser('customer') }>Customer</div>

            <div class="button button3 text-word" onClick={() => this.routeBasedOnUser('admin') }>Admin here</div>
        </div>
    }
}

export default withRouter(Home);