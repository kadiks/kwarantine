import Link from 'next/link';
import { withRouter, Router } from 'next/router';
import { Body } from '../text';
import styles from '../../../utils/styles';
const Basic = ({ children, href = '', router }) => {
  return (
    <button
      type="button"
      className={`btn btn-outline-secondary`}
      onClick={() => {
        router.push(href);
      }}>
      <Body isInline={true}>{children}</Body>
    </button>
  );
};

export default withRouter(Basic);
