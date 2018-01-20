import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { OverlayCard } from '../public/components';


const content = (
    <div 
        style={{ 
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Avenir'
        }}
    >
        <p style={{ fontSize: '18px' }}>
            Project description goes here. Show this when
            hovering over the project
        </p>
        <button className='button-primary'>
            Click Me!
        </button>
    </div>
);

storiesOf('OverlayCard', module)
    .add('Default', () => (
        <OverlayCard
            title='Sample Project'
            overlay={content}
        />
    ));
