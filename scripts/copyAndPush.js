
const copyAndPush = (array, num) => {
    let arrayCopy = array.slice();
    arrayCopy.push(num);
   return arrayCopy;
};

module.exports = { copyAndPush };
