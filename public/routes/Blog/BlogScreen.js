import React, { Component } from 'react';
import styles from './styles.css';

class BlogScreen extends Component {
    renderHeader() {
        return (
            <div className={styles.header}>
                <h1>
                    My Blog
                </h1>
                <p style={{ fontFamily: 'Avenir', fontSize: '15px', marginTop: '10px' }}>
                    some stuff I think about alot, written down for people to read.
                </p>
                <hr className={styles.divider} />
            </div>
        );
    }
    render() {
        return (
            <div className={`animated fadeIn ${styles.blog}`}>
                { this.renderHeader() }
            </div>
        );
    }
}

export default BlogScreen;
