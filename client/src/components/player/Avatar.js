import React from 'react';
import styles from '../../utils/styles';
import { randinc } from '../../utils/random';

// https://www.npmjs.com/package/@dicebear/avatars-avataaars-sprites
class Avatar extends React.Component {
  render() {
    const { playerId, mood = 'happy', width = 100, size = "normal" } = this.props;
    const moods = {
      happy: 'options[eyes][]=happy&options[mouth][]=smile',
      sad: 'options[eyes][]=surprised&options[mouth][]=sad',
    };
    const bgColors = [
      styles.color.primary,
      styles.color.secondary,
      styles.color.action,
      styles.color.waiting,
    ];
    const bgColor = bgColors[randinc(0, bgColors.length - 1)].replace('#', '');
    let updatedWidth = width;
    if (size === "small") {
      updatedWidth = 50;
    }
    if (size === 'large') {
      updatedWidth = 120;
    }
    return (
      <div
        className="kwa-avatar"
        style={{
          width: updatedWidth,
        }}
      >
        {/* <img
          src={`https://avatars.dicebear.com/v2/avataaars/${playerId}.svg?${
            moods[mood]
          }&options[background][]=%23${bgColor}&options[radius][]=${
            width * 0.5
          }`}
        /> */}
        <img
          src={`https://avatars.dicebear.com/v2/avataaars/${playerId}.svg?options[background][]=%23${bgColor}&options[radius][]=${
            updatedWidth * 0.5
          }`}
        />
      </div>
    );
  }
}

export default Avatar;
