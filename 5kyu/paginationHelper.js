//https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript
class PaginationHelper {
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many items fit within a single page
    this.collection = collection
    this.itemsPerPage = itemsPerPage
	}
	itemCount() {
	// returns the number of items within the entire collection
    return this.collection.length
	}
	pageCount() {
	// returns the number of pages
    return Math.ceil(this.collection.length/this.itemsPerPage)
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based. Return -1 for pageIndex values that are out of range
        if (pageIndex+1>this.pageCount()||pageIndex<0) return -1
        else if (pageIndex+1<this.pageCount()) return this.itemsPerPage
        //else return this.itemCount()%this.itemsPerPage
		else return this.itemCount()-(this.itemsPerPage*(this.pageCount()-1))
        
	}
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes. Return -1 for itemIndex values that are out of range
    if (itemIndex+1>this.itemCount()||itemIndex<0) return -1
    else return Math.floor((itemIndex)/this.itemsPerPage)
	}
}

const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
const helper = new PaginationHelper(collection, 10)

// console.log(helper.pageCount(), 3);
// console.log(helper.itemCount(), 24);

console.log(helper.pageItemCount(1), 10);
console.log(helper.pageItemCount(2), 4);
console.log(helper.pageItemCount(3), -1);
//console.log(helper.pageItemCount(5), 5);


// console.log(helper.pageIndex(13), 1);
// console.log(helper.pageIndex(40), -1);
// console.log(helper.pageIndex(5), 0);
// console.log(helper.pageIndex(15), 1);
// console.log(helper.pageIndex(22), 2);
// console.log(helper.pageIndex(3), 0);
// console.log(helper.pageIndex(0), 0);
// console.log(helper.pageIndex(-1), -1);
// console.log(helper.pageIndex(-23), -1);
// console.log(helper.pageIndex(-15), -1);
