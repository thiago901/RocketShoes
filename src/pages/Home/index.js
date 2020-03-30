import React, { Component } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Container, ProductList, Loading } from './style';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as actionsCart from '../../store/modules/cart/actions';

class Home extends Component {
  state = {
    products: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      formatPrice: formatPrice(product.price),
    }));

    this.setState({ products: data });
    this.setState({ loading: false });
  }

  handdleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products, loading } = this.state;
    const { amount } = this.props;
    return (
      <Container>
        {loading ? (
          <Loading>
            <div />
            <div />
            <div />
            <div />
          </Loading>
        ) : (
          <ProductList>
            {products.map(product => (
              <li key={product.id}>
                <img src={product.image} alt={product.title} />
                <strong>{product.title}</strong>
                <span>{product.formatPrice}</span>
                <button
                  type="button"
                  onClick={() => this.handdleAddProduct(product.id)}
                >
                  <div>
                    <MdShoppingCart size={16} color="#fff" />
                    {amount[product.id] || 0}
                  </div>
                  <span>ADICIONAR AO CARRINHO</span>
                </button>
              </li>
            ))}
          </ProductList>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});
const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionsCart, dispatch);
};

Home.propTypes = {
  addToCartRequest: propTypes.func.isRequired,
  amount: propTypes.number.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
