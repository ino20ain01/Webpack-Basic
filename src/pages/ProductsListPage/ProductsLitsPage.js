import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductsList from '../../components/ProductsList/ProductsList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { actFetchProductsRequest, actDeleteProductRequest } from "../../actions";

class ProductsLitsPage extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    showProducts = products => {
        let result = []
        if (products.length) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={ index }
                        product={ product }
                        index={ index }
                        onDelete={ this.onDelete }
                    />
                );
            });
        }
        return result
    }

    onDelete = id => {
        this.props.onDeleleProduct(id);
    }

    render() {
        let { products } = this.props;

        return (
        <div className="col-md-12">
            <Link to="/product/add" className="btn btn-success mb-10">
                Thêm Sản Phẩm
            </Link>
            <ProductsList>
                { this.showProducts(products) }
            </ProductsList>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        },
        onDeleleProduct: id => {
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsLitsPage);
