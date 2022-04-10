const obj = [
    { id: 8, name: 'Safa' },
    { id: 4, name: 'Rina' },
    { id: 9, name: 'Dinda' },
    { id: 7, name: 'Erna' },
    { id: 60, name: 'Rani' },
    { id: 10, name: 'Edwin' },
];

const sortById = obj.sort((a, b) => {
    return a.id - b.id;
})

const sortByName = obj.sort(function (a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
})

console.log("hasil", sortByName);