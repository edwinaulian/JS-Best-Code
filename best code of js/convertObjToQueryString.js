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

// Convert URL parameters to a JavaScript object
var query = "a=1&b=2&c=3";
var obj = JSON.parse('{"' + decodeURI(query).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
const obj2 = JSON.parse('{"' + query.replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) {
    return key === "" ? value : decodeURIComponent(value)
});


// Print Hasil
console.log("CARA 1 queryES5", queryES5);
console.log("CARA 2 queryES6", queryES6);

// Print Hasil Convert URL parameters to a JavaScript object
console.log("CARA 1", obj);
console.log("CARA 2", obj2);