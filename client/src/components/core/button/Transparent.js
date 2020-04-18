import styles from "../../../utils/styles";

const Transparent = ({
    children,
    onClick,
    classes,
    style
}) => {
    return (
        <div
            onClick={onClick}
            className={`transparent-btn ${classes}`}
            style={{
                cursor: 'pointer',
                ...style
            }}>
            {children}
        </div>
    );
};

export default Transparent;