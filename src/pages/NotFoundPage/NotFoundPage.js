import React, { Component } from 'react';

class NotFoundPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="alert alert-warning" role="alert">
                    <strong>Warning 404!</strong> Không tìm thấy trang
                </div>
            </div>
        );
    }
}

export default NotFoundPage;
