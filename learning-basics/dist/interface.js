var smallBible = {
    title: "Small Bible",
    price: 400,
    category: "Religion"
};
console.log(smallBible.category);
//Working with literals 
var direction = "Bottom";
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
var req = {
    url: "http://localhost:4500",
    method: "GET"
};
var handleRequest = function (url, method) { return url + " uses " + method; };
console.log(handleRequest(req.url, req.method));
