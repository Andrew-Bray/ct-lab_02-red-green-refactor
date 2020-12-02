const capitalizeAndFilter = (arr) => {
    // let noFs = arr.filter(name => !name.startsWith('f'));

    let noFs = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].startsWith('f') && !arr[i].startsWith('F')) {
noFs.push(arr[i]);
        }
    }

   const allCaps = noFs.map(name => name.toUpperCase());
    return allCaps;

};

module.exports = { capitalizeAndFilter }
;