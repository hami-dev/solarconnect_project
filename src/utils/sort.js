export const sort = (value, desc) => {
  let arr = value.slice();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (desc ? arr[j] > arr[j - 1] : arr[j] < arr[j - 1]) {
        let tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
      } else {
        break;
      }
    }
  }
  return arr;
};

export const makeArrayfromString = (value) => {
  const arr = value
    .split(',')
    .filter((el) => el && el !== ' ' && !isNaN(el))
    .map((el) => +el);
  return arr;
};
