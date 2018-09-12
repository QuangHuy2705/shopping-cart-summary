import React, { Component } from 'react';
import {Grid} from "react-bootstrap";
import Subtotal from "./components/Subtotal/Subtotal";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import TaxesFees from "./components/TaxesFees/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import PromoCode from "./components/PromoCode/PromoCode";
import {connect} from "react-redux";
import {handleChange} from "./actions/promoCodeAction";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 100,
      pickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0,
      disablePromoButton: false
    }
  }

  componentDidMount() {
    const {total, pickupSavings, taxes} = this.state;
    this.setState({
      taxes: (total + pickupSavings) * 0.0875
    }, function() {
      this.setState({
        estimatedTotal: total + pickupSavings + this.state.taxes
      })
    });
  }

  giveDiscountHandler = () => {
    if(this.props.promoCode === "DISCOUNT") {
      this.setState({
        estimatedTotal: this.state.estimatedTotal * 0.9,
      }, function() {
        this.setState({
          disablePromoButton: true
        })
      })
    }
  }

  render() {
    const {total, pickupSavings, taxes, disablePromoButton, estimatedTotal} = this.state;
    return (
      <div className="container">
        <Grid className="purchase-cart">
          <Subtotal price={total.toFixed(2)} />
          <PickupSavings price={pickupSavings} />
          <TaxesFees taxes={taxes.toFixed(2)} />
          <hr/>
          <EstimatedTotal price={estimatedTotal.toFixed(2)}/>
          <ItemDetails price={estimatedTotal.toFixed(2)}/>
          <hr/>
          <PromoCode giveDiscount={() => this.giveDiscountHandler()}
            isDisabled={disablePromoButton}
          />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})

export default connect(mapStateToProps, {handleChange})(App);
