import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            hasError: false,
            errorMessage: null,
            errorInfo: null
        }
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error,
            errorInfo: info
        });
    }

    render () {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.errorMessage && this.state.errorMessage.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;