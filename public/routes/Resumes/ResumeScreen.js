import React, { Component } from 'react';
import styles from './styles.css';

class ResumeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zoomLevel: 0
        };
    }
    renderResumeImage() {
        let width = '40%';
        let height = '40%';
        let cursor = 'zoom-in';
        switch (this.state.zoomLevel) {
            case 1: {
                width = '60%';
                height = '60%';
                break;
            }
            default:
                break;
        }
        if (this.state.zoomLevel === 1) {
            cursor = 'zoom-out';
        }
        return (
            <img
                onClick={() => this.setState({ zoomLevel: (this.state.zoomLevel + 1) % 2 })}
                style={{ width, height, cursor }} 
                className={styles.resumeImage}
                src='/static/images/resume.png'
                role='presentation'
            />
        );
    }
    render() {
        return (
            <div className={`animated fadeIn ${styles.resumeScreen}`}>
                <div 
                    className={styles.imageWrapper}
                >
                    <h1 
                        style={{ fontSize: '50px', margin: '0px' }}
                    >
                        my cool resume
                    </h1>
                    <p>
                        Click <a style={{ cursor: 'pointer' }} href='https://s3.amazonaws.com/resume-dzhango/resume.pdf' download>here</a> to download as a pdf
                    </p>
                    { this.renderResumeImage() }
                </div>
            </div>
        );
    }
}

export default ResumeScreen;
