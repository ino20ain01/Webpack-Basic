import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {

    onDelete = id => {
        let { onDelete } = this.props;
        if (confirm('Bạn chắc chắn muốn xóa?')) { // eslint-disable-line
            onDelete(id);
        }
    }

    render() {

        let { product, index } = this.props;
        let statusName = product.status ? 'Còn hàng' : 'Hết hàng';
        let statusClass = product.status ? 'info' : 'danger';
        return (
            <tr>
                <td>{ ++index }</td>
                <td>{ product.id }</td>
                <td>{ product.name }</td>
                <td>{ product.price }</td>
                <td>
                 <span className={`label label-${statusClass}`}>
                     { statusName }
                 </span>
                </td>
                <td>
                    <Link
                        className="btn btn-primary"
                        to={`/product/${product.id}/edit`}
                    >
                        Sửa
                    </Link>
                    &nbsp;
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={ () => this.onDelete(product.id) }
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
