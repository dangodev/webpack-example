var timer = function() {
  var date = new Date();
  console.log(date);
};

export default function() {
  setInterval(timer, 1000);
}
