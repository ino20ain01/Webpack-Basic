import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    actAddProductRequest,
    actGetProductRequest,
    actUpdateProductRequest
} from '../../actions';

class ProductsLitsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    }

    componentDidMount() {
        let { match } = this.props;
        if (match) {
            let id = match.params.id;
            if (id) {
                this.props.onEditProduct(id);
            }
        }
    }

    componentWillReceiveProps(nextprops) {
        if (nextprops && nextprops.itemEditing) {
            let { itemEditing } = nextprops;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chkbStatus: itemEditing.status
            });
        }
    }

    onChange = e => {
        let target = e.target,
            name = target.name,
            value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = e => {
        e.preventDefault();
        let {
            id,
            txtName,
            txtPrice,
            chkbStatus
        } = this.state;
        let product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        };
        let { history } = this.props;

        if (id) {
            this.props.onUpdateProduct(product);
            history.goBack();
        } else {
            this.props.onAddProduct(product);
            history.goBack();
        }
    }

    render() {

        let { txtName, txtPrice, chkbStatus } = this.state;

        return (
        <div className="col-md-6 col-md-offset-3">
            <form onSubmit={ this.onSave }>
                <div className="form-group">
                    <label htmlFor="product-name">Tên sản phẩm: </label>
                    <input
                        type="text"
                        className="form-control"
                        id="product-name"
                        placeholder="Tên sản phẩm..."
                        name="txtName"
                        value={ txtName }
                        onChange={ this.onChange }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="product-price">Giá: </label>
                    <input
                        type="number"
                        className="form-control"
                        id="product-price"
                        placeholder="Giá..."
                        name="txtPrice"
                        value={ txtPrice }
                        onChange={ this.onChange }
                    />
                </div>
                <div className="checkbox">
                    <label>
                        <input
                            type="checkbox"
                            name="chkbStatus"
                            value={ chkbStatus }
                            onChange={ this.onChange }
                            checked={ chkbStatus }
                        />
                        Còn hàng
                    </label>
                </div>
                <button type="submit" className="btn btn-success">Lưu</button>
                &nbsp;
                <Link
                    to="/product-list"
                    className="btn btn-default"
                >
                    Hủy
                </Link>
            </form>
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: product => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: id => {
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct: product => {
            dispatch(actUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsLitsPage);
