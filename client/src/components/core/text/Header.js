import React from 'react';

import styles from '../../../utils/styles';

const Header = ({
    children,
    size = 'md',
    color = null,
    isInline = false
}) => {
    const fontSize = styles.size.font.header[size];
    const fontColor = color ?
        color :
        styles.color.primary;
    const display = isInline ?
        'inline' :
        'block';
    return (
        <p
            className="text-header"
            style={{
                fontFamily: styles.font.name.header,
                color: fontColor,
                fontWeight: 'bold',
                display,
                fontSize
            }}>
            {children}
        </p>
    );
};

export default Header;