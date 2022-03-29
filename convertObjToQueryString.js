var params = {
    a: 1,
    b: 2,
    c: 3
};

// convert to "a=1&b=2&c=3"

// cara 1
var queryES5 = Object.keys(params).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
}).join('&');
// cara 2
var queryES6 = Object.keys(params).map(key => key + '=' + params[key]).join('&');
// print hasil
console.log("hasil", queryES6)

// Convert URL parameters to a JavaScript object
var query = "a=1&b=2&c=3";
var obj = JSON.parse('{"' + decodeURI(query).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
JSON.parse('{"' + query.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) {
    return key === "" ? value : decodeURIComponent(value)
});
console.log(obj);