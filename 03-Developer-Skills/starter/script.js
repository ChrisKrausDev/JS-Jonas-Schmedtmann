// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
  
    for (let i = 0; i < temps.length; i++) {
      const curTemp = temps[i];
      if (typeof curTemp !== 'number') continue;
  
      if (curTemp > max) max = curTemp;
      if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
  };

console.log(calcTempAmplitude([2, 3, 4, 2, 1, 56, 45]));