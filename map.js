const pets = [
    {
        kind: 'dog',
        name: 'bud',
        breed: 'labrador',
        age: 7,
    },
    {
        kind: 'hamster',
        name: 'fluffy',
        breed: 'dwarf',
        age: 2,
    },
    {
        kind: 'fish',
        name: 'goldie',
        breed: 'goldfish',
        age: 11,
    },
    {
        kind: 'cat',
        name: 'moustache',
        breed: 'siamese',
        age: 8,
    },
    {
        kind: 'dog',
        name: 'k9',
        breed: 'german shepherd',
        age: 6,
    },
];
/**
 * Map
 * Returns a new array with the same amount of elements of the original one
 */

const petNames = pets.map((pet) => {
    return pet.name;
});
console.log(petNames);
