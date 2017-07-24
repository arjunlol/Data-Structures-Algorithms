var averageOfLevels = function(root) {
    let arraySum = []
    let arrayMany = []
    let level = 0;
    lvlAverage(root, level, arraySum, arrayMany)
    return arraySum.map((elem, i) => {
        return elem / arrayMany[i]
    })
};

function lvlAverage(node, lvl, arrayAvg, arrayMany) {

    if(!node){
        return;
    }
    arrayAvg[lvl] = arrayAvg[lvl] ? arrayAvg[lvl] + node.val : node.val;
    arrayMany[lvl] = arrayMany[lvl] ? arrayMany[lvl] + 1: 1;
    lvl = lvl + 1;
    lvlAverage(node.left, lvl, arrayAvg, arrayMany);
    lvlAverage(node.right, lvl, arrayAvg, arrayMany)
}