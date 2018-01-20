/* global window */
import React, { Component } from 'react';
import styles from './styles.css';

import { OverlayCard } from '../../components';
import { projects } from '../../content';

class ProjectScreen extends Component {
    renderProjects() {
        const projectComps = projects.map((project) => {
            const content = (
                <div
                    style={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        fontFamily: 'Avenir'
                    }}
                >
                    <p style={{ fontSize: '18px', margin: '20px', color: 'white' }}>
                        { project.description }
                    </p>
                    <button 
                        className={`button-primary ${styles.buttonLink}`}
                        onClick={() => {
                            window.location.href = project.link;
                        }}
                    >
                        Link
                    </button>
                    {
                        project.demo &&
                        <button 
                            className={`button-primary ${styles.buttonLink}`}
                            onClick={() => {
                                window.location.href = project.demo;
                            }}
                        >
                            Demo
                        </button>
                    }
                </div>
            );
            return (
                <OverlayCard
                    key={project.title}
                    title={project.title}
                    overlay={content}
                    stack={project.stack}
                    tagline={project.tagline}
                />
            );
        });
        return (
            <div className={styles.projectGrid}>
                { projectComps }
            </div>
        );
    }
    renderHeader() {
        return (
            <div className={styles.header}>
                <h1>
                    Side Projects
                </h1>
                <p style={{ fontFamily: 'Avenir', fontSize: '15px', marginTop: '10px' }}>
                    or reasons why I never really get out much anymore
                </p>
                <hr className={styles.divider} />
            </div>
        );
    }
    render() {
        return (
            <div className={`animated fadeIn ${styles.projects}`}>
                { this.renderHeader() }
                { this.renderProjects() }
            </div>
        );
    }
}

export default ProjectScreen;
