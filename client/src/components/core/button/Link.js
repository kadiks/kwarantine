import Link from 'next/link';
import { Body } from '../text';
import styles from '../../../utils/styles';
const Basic = ({ children, href = '' }) => {
  return (
    <button type="button" className={`btn btn-outline-secondary`}>
      <Link href={href}>
        <a>
          <Body isInline={true}>{children}</Body>
        </a>
      </Link>
    </button>
  );
};

export default Basic;
