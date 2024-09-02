function Point(x, y) {
    this.x = x;
    this.y = y;
    this.print = () => {
        console.log('X = ' + this.x + " Y = " + this.y);
    }
}

function isParallel(a, b) {
    console.log("---Is Parallel?---");
    if (a.x === b.x && a.y === b.y) {
        console.log("Line is a single dot");
    } else if (a.x === b.x) {
        console.log("Line is parallel to Y");
    } else if (a.y === b.y) {
        console.log("Line is parallel to X");
    } else {
        console.log("Line is not parallel to any axis");
    }
}

const obj1 = new Point(1, 2);
const obj2 = new Point(1, 5);

module.exports = {
    isP: isParallel,
    point1: obj1,
    point2: obj2
}
