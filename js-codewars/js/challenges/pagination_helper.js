function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
  this.itemCounter = this.collection.length;
  this.pageCounter = Math.ceil(this.itemCounter / this.itemsPerPage);
  const pages = new Array(this.pageCounter);
  let pos = 0;

  this.pageItemCounter = this.collection.reduce(
    (acc, current, currentIndex) => {
      let index = currentIndex + 1;
      if (pages[pos] === undefined) pages[pos] = [];
      pages[pos].push(currentIndex);
      if (
        pages[pos].length === this.itemsPerPage ||
        this.collection[index] === undefined
      ) {
        acc.push(pages[pos]);
        pos++;
      }

      return acc;
    },
    []
  );
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return this.itemCounter;
};

PaginationHelper.prototype.pageCount = function () {
  return this.pageCounter;
};

PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  if (pageIndex >= 0 && pageIndex < this.pageCounter) {
    return this.pageItemCounter[pageIndex].length;
  } else return -1;
};

PaginationHelper.prototype.pageIndex = function (itemIndex) {
  if (itemIndex >= 0 && itemIndex < this.itemCounter) {
    const pageIndex = this.pageItemCounter.reduce((acc, cv, ci) => {
      const found = cv.find((item) => item === itemIndex);
      if (found !== undefined) acc.push(ci);
      return acc;
    }, []);
    return pageIndex.toString();
  } else return -1;
};

var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
console.log(helper.itemCount());
console.log(helper.pageCount());
console.log(helper.pageItemCount(1));
console.log(helper.pageIndex(6));
