// let arr = [1,2,3,4,5];
// Array.prototype.myMap = function(cb){
//     for(i=0; i<this.length; i++){
//         cb(this[i])
//     }
// }

//salom mening ismim `Robert`
// let str = `Salom mening ismim robert`;
// function capitalize(str){
//     return str.split("")
    
// }

// const arr = [1, 2, 2, 3, 1, 4, 5, 1, 5, 6, 6]
// // [1, 2, 3, 4, 5, 6]
// const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
// console.log(uniqueArr);

// const fruits = [`apple`, `kiwi`, `potato`, `banana`]
// // output sozlar uzunligi boyicha eng kattasidan boshlab.
// let res = fruits.sort((a, b) => b.length - a.length);
// console.log(res); // [ 'banana', 'potato', 'apple', 'kiwi'

Array.prototype.myReduce = function (cb, val) {
  let acc = val !== undefined ? val : this[0];
  let start = val !== undefined ? 0 : 1;

  for (let i = start; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};

Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};


Array.prototype.mySome = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return true;
    }
  }
  return false;
};


Array.prototype.myEvery = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i], i, this)) {
      return false;
    }
  }
  return true;
};


Array.prototype.myFind = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

