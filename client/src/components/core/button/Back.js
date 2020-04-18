import Link from 'next/link';

import {
    Body
} from '../text'

const Back = ({
    text,
    link
}) => {
    return (
        <Link
            href={link}>
            <a>
                <Body>{text}</Body>
            </a>
        </Link>
    );
};

export default Back;