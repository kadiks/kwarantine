import {
    Body
} from '../text';
import styles from '../../../utils/styles';
const Basic = ({
    children,
    onClick = () => { }
}) => {
    return (
        <button
            type="button"
            className={`btn btn-outline-secondary`}
            onClick={onClick}>
            <Body isInline={true}>{children}</Body>
        </button>

    );
};

export default Basic;