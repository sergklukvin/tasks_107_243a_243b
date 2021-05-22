/// task 107

function maxNumber(m) {

    if (m < 4) {
        return 'Integer should be 4 or more'
    }

    let k = 1;
    let result = Math.pow(4, k);

    while (result <= m) {
        k++
        result = Math.pow(4, k);
    }

    return k - 1;
}

console.log(maxNumber(64));

///task 243a

function checkInteger(n) {
    let x = 1;
    let y = 1;
    let temp;

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {
            x = i;
            y = j
            temp = Math.pow(x, 2) + Math.pow(y, 2)

            if (temp === n) {
                return `x=${x}, y=${y}`
            }
        }
    }
    return false
}

console.log(checkInteger(8))

///task 243b

function checkPair(n) {
  let x = 1;
  let y = 1;
  let temp;
  const result = [];

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      x = i;
      y = j;
      temp = Math.pow(x, 2) + Math.pow(y, 2);

      if (temp === n && x >= y) {
        result.push({ x: x, y: y });
      }
    }
  }

  if (result.length === 0) {
    return false;
  } else {
    return result;
  }
}

console.log(checkPair(13));
