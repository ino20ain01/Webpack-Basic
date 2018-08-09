import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản lý sản phẩm',
        to: '/product-list',
        exact: false
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={ to }
            exact={ activeOnlyWhenExact }
            children={({ match }) => {
                let active = match ? 'active' : '';
                return (
                    <li className={ active }>
                        <Link
                        to={ to }
                        >
                            { label }
                        </Link>
                    </li>
                );
            }}
        />
    );
}

class Menus extends Component {

    showMenus = menus => {
        let result = [];
        if (menus.length) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                    key={ index }
                    label={ menu.name }
                    to={ menu.to }
                    activeOnlyWhenExact={ menu.exact }
                    />
                );
            });
        }
        return result;
    }

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">Call API</a>
                    </div>
                    <ul className="nav navbar-nav">
                        { this.showMenus(menus) }
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menus;
