import React, {Component} from "react";

import {Row, Collapse, Col, Button, Well, Media} from "react-bootstrap";

export default class ItemDetails extends Component { 
	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
	}
	render() {
		return (
			<div>
				<Button
					className="item-details-button"
					bsStyle="link"
					onClick={() => this.setState({open: !this.state.open})}
				>
					{this.state.open === false ? `See ` : `Hide `} item details
					{this.state.open === false ? ` +` : ` -`}
				</Button>
				<Collapse in={this.state.open}>
					<div>
						<Well>
							<Media>
								<Media.Left>
									<img width={100} height={100} src="https://www.ikea.com/ca/en/images/products/ekedalen-chair-brown__0516603_PE640439_S4.JPG" alt="thumbnail"/>
								</Media.Left>
								<Media.Body>
									<p>Essentials by OFM ES22 Racing Style Leather Gaming Chair, REd</p>
									<Row>
										<Col md={6}>
											<strong>${`${this.props.price}`}</strong>
											<br/>
											<strong className="price-strike">${`${this.props.price}`}</strong>
										</Col>
										<Col md={6}>Qty: 1</Col>
									</Row>
								</Media.Body>
							</Media>
						</Well>
					</div>
				</Collapse>
			</div>
		)
	}
}

