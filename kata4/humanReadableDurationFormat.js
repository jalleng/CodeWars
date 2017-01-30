// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. 
// If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

'use strict';

let formatDuration = (seconds) => {
  if (seconds === 0) return ("now");
  let hash = [
    {
      "name": "year",
      "size": 31536000
    },
    {
      "name": "day",
      "size": 86400
    },
    {
      "name": "hour",
      "size": 3600
    },
    {
      "name": "minute",
      "size": 60
    },
    {
      "name": "second",
      "size": 1
    }
  ];

  let parser = (remainder, index) => {
    output[hash[index].name] = Math.floor(remainder / hash[index].size);
    let remainderOut = remainder % hash[index].size;
    return remainderOut;
  };

  let sentenceBuilder =  (data) => {
    let plural = '';
    for (let key in data) {
      plural = (data[key] > 1) ? 's' : '';
      outputList.push(`${data[key]} ${key}${plural}`);  
    }
    outputList = outputList.join(', ');
    let index = outputList.lastIndexOf(',');
    if (index > 0){
      outputList = outputList.substr(0, index) + ' and' + outputList.substr(index + 1);
    }
  };

  let remainder = seconds;
  let output = {};
  let outputList = [];
  for (let i = 0; i < 5; i++) {
    if (remainder >= hash[i].size) {
      remainder = parser(remainder, i);
    }
  }
  sentenceBuilder(output);
  return (outputList);
};

formatDuration(1);
formatDuration(62);
formatDuration(120);
formatDuration(3600);
formatDuration(3662);  
formatDuration(63072000);
