import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchProducts } from '../../actions';


class ProductList extends Component {
  
  componentDidMount() {
    this.props.fetchProducts();
  }
  
  
  render() {
    return (
      <div style={{marginTop: 100}}>
        <main role="main" className="container">
        <h1 className="mt-5">Listes Produits</h1>
        <div className="row">
          <div className=" col-md-3">
            <div className="card" style={{ width: '18rem'}}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Produit Bio</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/product/edit" className="card-link btn btn-primary">Mettre a Jour</Link>
                <Link to="/product/delete" className="card-link btn btn-danger">Supprimer</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ width: '18rem'}}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Produit Bio</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link btn btn-primary">Mettre a Jour</a>
                <a href="#" className="card-link btn btn-danger">Supprimer</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.products)
  return {
    products: state.products
  }
}
export default connect(mapStateToProps,{ fetchProducts })(ProductList);
