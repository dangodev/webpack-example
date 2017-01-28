import moment from 'moment/min/moment.min';

const timer = () => {
  const time = moment().format('hh:mm:ss');
  console.log(time);
};

export default () => setInterval(timer, 1000);
