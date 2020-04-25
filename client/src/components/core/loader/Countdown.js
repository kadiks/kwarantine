import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const UrgeWithPleasureComponent = ({ duration }) => (
  <div
    style={{
      width: 50,
    }}
  >
    <CountdownCircleTimer
      size={50}
      strokeWidth={3}
      isPlaying
      duration={duration}
      colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  </div>
);

export default UrgeWithPleasureComponent;
