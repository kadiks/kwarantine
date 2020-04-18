import React from 'react';
import _ from 'lodash';

import {
  Header,
  Body
} from '../text';
import styles from '../../../utils/styles';

const UserRow = ({ username, image, link, content }) => {
  const renderImage = img => {
    if (img) {
      return img;
    }
    return 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';
  };

  const renderContent = content => {
    if (content) {
      return content;
    }
    return `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
    enim sunt aperiam, id tempore fuga error deserunt eligendi sint
    illum ducimus quia iste earum corporis ullam asperiores magni
    unde provident.`;
  };

  return (
    <div className="user__row">
      <div className="user__row-left">
        <a href={link} target="_blank">
          <img
            src={renderImage(image)}
            alt={username}
            className="user__row-img"
          />
        </a>
      </div>

      <div className="user__row-right">
        <h4 className="user__row-title"><Header>{username}</Header></h4>
        <p className="user__row-content"><Body>{renderContent(content)}</Body></p>
        <div className="user__row-link-section">
          <a className="user__row-link" href={link} target="_blank">
            <Body color={styles.color.secondary}>Visiter sa page</Body>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserRow;
