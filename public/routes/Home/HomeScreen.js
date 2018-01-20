/* global window */
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import styles from './styles.css';

import { Navbar } from '../../components';

import { aboutText, tagText } from '../../content';

const buttonOptions = [{
    text: 'Projects',
    onClick: () => browserHistory.push('/projects')
}, {
    text: 'Blog',
    onClick: () => browserHistory.push('/blog')
}, {
    text: 'Resume',
    onClick: () => browserHistory.push('/resume')
}];

class HomeScreen extends Component {
    renderNavOptions() {
        return buttonOptions.map((option) => {
            let backgroundColor = '';
            if (`/${option.text.toLowerCase()}` === this.props.location.pathname || 
                option.text.toLowerCase() === this.props.location.pathname) {
                backgroundColor = 'rgba(0, 0, 0, 0.2)';
            } 
            return (
                <div
                    onClick={option.onClick}
                    key={option.text}
                    className={styles.navOption}
                    style={{ backgroundColor }}
                >
                    <p>{option.text}</p>
                </div>
            );
        });
    }
    renderHeader() {
        return (
            <div className={styles.header}>
                <h1>David Zhang</h1>
                <p style={{ fontSize: '13px' }}>
                    <em>{tagText}</em>
                </p>
            </div>
        );
    }

    renderOptions() {
        return (
            <div className={styles.options}>
                <p
                    onClick={() => browserHistory.push('projects')}
                    className={styles.option}
                    style={{ marginRight: '10px' }}
                >
                    Cool Projects
                </p>
                <i 
                    className='fa fa-circle'
                    style={{ 
                        fontSize: '5px',
                        marginRight: '10px',
                        color: 'dodgerblue'
                    }}
                />
                <p
                    onClick={() => browserHistory.push('blog')}
                    className={styles.option}
                    style={{ marginRight: '10px' }}                    
                >
                    Shower Thoughts
                </p>
                <i 
                    className='fa fa-circle'
                    style={{ 
                        fontSize: '5px',
                        marginRight: '10px',
                        color: 'dodgerblue'
                    }}
                />
                <p 
                    className={styles.option}
                    onClick={() => browserHistory.push('resume')}
                >
                    Resume
                </p>
            </div>
        );
    }

    renderImage() {
        return (
            <div className={styles.imageWrapper}>
                { this.renderOptions() }
                <img 
                    className={styles.image}
                    src='/static/images/profile.jpg'
                    role='presentation'
                />
                <p  
                    style={{ 
                        paddingTop: '15px',
                        textAlign: 'center',
                        fontSize: '10px'
                    }}
                >
                    <em>I'm a tourist in my own city</em>
                </p>
            </div>
        );
    }

    renderButtons() {
        return (
            <div className={styles.buttonGroup}>
                <i 
                    onClick={() => { 
                        window.location.href = 'https://linkedin.com/in/david-zhang-9798b999/';
                    }}
                    className={`fa fa-linkedin-square ${styles.socialIcon}`}
                />
                <i
                    onClick={() => { 
                        window.location.href = 'https://github.com/david8zhang';
                    }}
                    className={`fa fa-github-square ${styles.socialIcon}`}
                />
            </div>
        );
    }

    renderAbout() {
        return (
            <div className={`${styles.about}`}>
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
                    professional thingies
                </h1>
                <p style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                    {aboutText}
                </p>
                { this.renderButtons() }
            </div>
        );
    }

    render() {
        if (this.props.children) {
            return (
                <div>
                    <Navbar
                        homeRedirect={() => browserHistory.push('/')}
                        preset='dash'
                        title='David Zhang'
                    >
                        { this.renderNavOptions() }
                    </Navbar>
                    { this.props.children }
                </div>
            );
        }
        return (
            <div className={`animated fadeIn ${styles.home}`}>
                { this.renderHeader() }
                { this.renderImage() }
                { this.renderAbout() }
            </div>
        );
    }
}

export default HomeScreen;
