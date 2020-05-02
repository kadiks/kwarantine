import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const UrgeWithPleasureComponent = ({ duration, size = 50 }) => (
  <div className="mx-auto" style={{
    width: size
  }}>
    <CountdownCircleTimer
      size={size}
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
