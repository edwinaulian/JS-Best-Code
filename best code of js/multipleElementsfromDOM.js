const elements = {};

['a', 'b', 'c', 'd'].forEach(item => elements = {
    ...elements,
    [item]: document.getElementById(item)
})

const { a,b,c,d } = elements;