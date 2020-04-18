import {
    Header,
    Body
} from '../core/text';
import Icon from '../core/Icon';
import styles from "../../utils/styles";
import Config from '../../Config';

const Footer = () => {
    return (
        <>
            <div className="row footer-nav-flag mt-5"></div>
            <div className="row footer-nav text-center mb-auto">
                <div className="col-12 col-md-8 col-lg-4 offset-md-2 offset-lg-4">
                    <Header size={'xs'}>
                        Made with&nbsp;
                        <Icon
                            name="favorite"
                            color={styles.color.secondary}
                            size={18} />
                        &nbsp;by&nbsp;
                        <br />
                        <a
                            href="https://www.linkedin.com/in/gregory-houldsworth-230975195/"
                            target="_blank">
                            Gregory Houldsworth
                        </a>
                        <br />
                        <a
                            href="https://www.michaellouisjean.com/"
                            target="_blank">
                            Michaël Louis-Jean
                        </a>
                        <br />&amp;&nbsp;
                        <br />
                        <a
                            href="https://cv.jenaiccambre.com/"
                            target="_blank">
                            Jénaïc Cambré
                        </a>
                    </Header>
                </div>
                <div className="col-12 text-right">
                    <Body size={'xs'}>Version {Config.VERSION}</Body>
                </div>
            </div>
        </>
    );
};

export default Footer;