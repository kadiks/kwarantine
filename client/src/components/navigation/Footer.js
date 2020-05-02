import {
    Header,
    Body
} from '../core/text';
import Icon from '../core/Icon';
import styles from "../../utils/styles";
import Config from '../../Config';

const Footer = ({ stats = {} } = {}) => {
    return (
        <>
            <div className="row footer-nav text-center mb-auto mt-5">
                <div className="col-12 text-left">
                    {Object.keys(stats).length !== 0 && 
                        <>
                        <Body>Vies sauvées de l'ennui : {stats.players}</Body>
                        <Body>Salles de confinements crées : {stats.matches}</Body>
                        <Body>Jours de confinements : {stats.games}</Body>
                        </>}
                    
                    <Body size={'xs'}>Mutations du virus : v{Config.VERSION}alpha</Body>
                </div>
                <div className="col-12 col-md-8 col-lg-4 offset-md-2 offset-lg-4">
                    <Body>
                        Made with&nbsp;
                        <Icon
                            name="favorite"
                            color={styles.color.quarternary}
                            size={18} />
                        &nbsp;by&nbsp;
                        <br />
                        <a
                            href="https://www.linkedin.com/in/gregory-houldsworth-230975195/"
                            target="_blank">
                            <Header size="xs" isInline>Gregory Houldsworth</Header>
                        </a> (dev fullstack)
                        <br />
                        <a
                            href="https://cv.jenaiccambre.com/"
                            target="_blank">
                            <Header size="xs" isInline>Jénaïc Cambré</Header>
                        </a> (dev fullstack &amp; chef de projet)
                        <br />
                        <a
                            href="https://cv.jenaiccambre.com/"
                            target="_blank">
                            <Header size="xs" isInline>???</Header>
                        </a> (designer) - pourquoi pas vous ?&nbsp;<Icon
                            name="sentiment_very_satisfied"
                            color={styles.color.quarternary}
                            size={18} />
                    </Body>
                </div>
            </div>
        </>
    );
};

export default Footer;