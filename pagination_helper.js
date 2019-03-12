// 5 kyu

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
}
  
// Returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;
}
  
// Returns the number of pages
PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
}
  
// Returns the number of items on the current page. pageIndex is zero based.
// This method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    if (!this.itemCount()) return -1;
    if (pageIndex < 0 || pageIndex >= this.pageCount()) return -1;
    
    let startIndex = pageIndex * this.itemsPerPage;
    
    return this.collection.slice(startIndex, startIndex + this.itemsPerPage).length;
}
  
// Determines what page an item is on. Zero based indexes.
// This method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
    if (!this.itemCount()) return -1;
    if (itemIndex < 0 || itemIndex > this.itemCount()) return -1;
    
    return Math.floor(itemIndex / this.itemsPerPage);
}