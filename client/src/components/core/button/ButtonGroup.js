import {
    Body
} from '../text';
import styles from '../../../utils/styles';
const ButtonGroup = ({
    isTransitioning,
    activeTab = 'in-progress',
    onClick = () => { }
}) => {
    const inProgressClass = activeTab === 'is-published' && isTransitioning === true ?
        'btn-outline-secondary' :
        'btn-success';
    const isPublishedClass = activeTab === 'is-published' && isTransitioning === true ?
        'btn-success' :
        'btn-outline-secondary';
    return (
        <div className="law-switch btn-group" role="group">
            <button
                type="button"
                className={`btn ${inProgressClass}`}
                onClick={() => onClick('in-progress')}>
                <Body size="lg" isInline={true}>Lois en examen...</Body>
            </button>
            <button
                type="button"
                className={`btn ${isPublishedClass}`}
                onClick={() => onClick('is-published')}>
                <Body size="lg" isInline={true}>Lois promulguées</Body>
            </button>
        </div>
    );
};

export default ButtonGroup;