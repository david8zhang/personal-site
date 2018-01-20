import React, { Component } from 'react';
import styles from './styles.css';

class OverlayCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHover: false
        };
    }

    render() {
        return (
            <div 
                className={styles.project}
                onMouseEnter={() => this.setState({ isHover: true })}
                onMouseLeave={() => this.setState({ isHover: false })}
            >
                <div className={styles.overlay}>
                    { this.props.overlay }
                </div>
                <h1 style={{ marginBottom: '5px', fontSize: '40px' }}>
                    {this.props.title}
                </h1>
                <p style={{ marginBottom: '0px' }}>
                    <em>{this.props.tagline}</em>
                </p>
                <p style={{ fontSize: '10px' }}>
                    {this.props.stack}
                </p>
            </div>
        );
    }
}

export default OverlayCard;
