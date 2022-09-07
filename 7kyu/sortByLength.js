function sortByLength (array) {
    // Return an array containing the same strings, ordered from shortest to longest
    array.sort(function (a, b) {
        return a.length - b.length;
    });
    return array
};
