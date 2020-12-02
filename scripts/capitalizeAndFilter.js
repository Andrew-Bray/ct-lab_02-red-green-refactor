const capitalizeAndFilter = (arr) => {
    let noFs = arr.filter(name => !name.startsWith('f'));

   const allCaps = noFs.map(name => name.toUpperCase());
    return allCaps;

};

module.exports = { capitalizeAndFilter }
;