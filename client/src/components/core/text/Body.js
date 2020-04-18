import React from 'react';

import styles from '../../../utils/styles';

const Body = ({
    children,
    size = 'md',
    bold,
    color = null,
    isInline = false,
    style = {}
}) => {
    const fontSize = styles.size.font.body[size];
    const fontColor = color ?
        color :
        styles.color.body;
    const display = isInline ?
        'inline' :
        'block';
    const compStyle = {
        fontFamily: styles.font.name.body,
        fontWeight: 300,
        color: fontColor,
        display,
        fontSize,
        ...style
    };
    if (bold === true) {
        compStyle.fontWeight = 'bold';
    }
    return (
        <p style={compStyle}>
            {children}
        </p>
    );
};

export default Body;