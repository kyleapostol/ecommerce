import React from 'react';

export default class ProductListItem extends React.Component {

  render() {
    console.log('products props: ', this.props.products.image);
    let products = this.props.products;
    return (
      <React.Fragment>
        <div className="card col-4" style={{ width: 18 + 'rem' }}>
          <img src={products.image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{products.name}</h5>
            <h6 className="card-description">{products.price}</h6>
            <p className="card-text">{products.shortDescription}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
