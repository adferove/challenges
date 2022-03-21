Array.prototype.sameStructureAs = function (other) {
  if (this.length === other.length) {
    let result = true;
    this.forEach((item, index) => {
      if (Array.isArray(item)) {
        if (other[index] !== undefined && Array.isArray(other[index])) {
          result = item.sameStructureAs(other[index]);
        } else result = false;
      } else {
        if (other[index] === undefined || Array.isArray(other[index]))
          result = false;
      }
    });
    return result;
  } else return false;
};

[1, [1, 1]].sameStructureAs([2, [2, 2]]);
