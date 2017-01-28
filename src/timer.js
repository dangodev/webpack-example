import moment from 'moment/min/moment.min';

var timer = function() {
  var time = moment().format('hh:mm:ss');
  console.log(time);
};

export default function() {
  setInterval(timer, 1000);
}
