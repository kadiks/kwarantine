import React from 'react';

import styles from '../../utils/styles';

const Icon = ({
    name,
    color,
    size,
    className,
    style
}) => {
    return (
        <i
            className={`material-icons`}
            style={{
                color,
                fontSize: size,
                ...style
            }}>
            {name}
        </i>
    );
};

Icon.defaultProps = {
    name: 'wb_sunny',
    color: styles.color.secondary,
    size: 80
};

export default Icon;