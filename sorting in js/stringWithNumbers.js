const items = ['Item 3', 'Item 2', 'Item 0', 'Item 23', 'Item 37'];

const sortes = items.sort((a, b) => {
    return +a.slice(-1) - +b.slice(-1);
})

console.log("hasil", sortes);