const r = /\d+/;
const items = ['Item 30', 'Item 21', 'Item 10', 'Item 230', 'Item 37', 'Item 7'];

const sortes = items.sort((a, b) => {
    return a.match(r) - b.match(r);
})

console.log("hasil", sortes);