var min = function (list) {
  let smallest = list[0];
  for (let i = 0; i < list.length; i++) {
    if (smallest > list[i]) {
      smallest = list[i];
    }
  }
  return smallest;
};

var max = function (list) {
  let biggest = list[0];
  for (let i = 0; i < list.length; i++) {
    if (biggest < list[i]) {
      biggest = list[i];
    }
  }
  return biggest;
};
