const raisinAlarm = function (cookie) {
  // Put your solution here
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === '🍇') {
      // console.log(cookie[i]);
      return 'Raisin alert!';
    }
  }
  return 'All good!';

  // cookie[i] === '🍇' ? 'Raisin alert!': 'All good!';
};

console.log(raisinAlarm(['🍫', '🍫', '🍇', '🍫']));
console.log(raisinAlarm(['🍫', '🍇', '🍫', '🍫', '🍇']));
console.log(raisinAlarm(['🍫', '🍫', '🍫']));

// --------------- //

const raisinAlarmArray = function (cookies) {
  const arr = [];

  for (let i = 0; i < cookies.length; i++) {
    // console.log(cookies[i]);
    for (let j = 0; j < cookies[i].length; j++) {
      // console.log(cookies[i][j]);
      if (cookies[j] === '🍇') {
        // console.log('it has a dehydrated grape ' + cookies[i]);
        arr.push('Raisin Alert');
        console.log('Raisin alert!');
      }
      arr.push('All good!');
    }
  }
  return arr;
};

console.log(
  raisinAlarmArray([
    ['🍫', '🍫', '🍇', '🍫'],
    ['🍫', '🍇', '🍫', '🍫', '🍇'],
    ['🍫', '🍫', '🍫'],
  ])
);
