const pets = [
    {
        kind: 'dog',
        name: 'bud',
        breed: 'labrador',
        age: 7,
        weight: 31,
    },
    {
        kind: 'hamster',
        name: 'fluffy',
        breed: 'dwarf',
        age: 2,
        weight: 0.04,
    },
    {
        kind: 'fish',
        name: 'goldie',
        breed: 'goldfish',
        age: 11,
        weight: 0.8,
    },
    {
        kind: 'cat',
        name: 'moustache',
        breed: 'siamese',
        age: 8,
        weight: 3.2,
    },
    {
        kind: 'dog',
        name: 'k9',
        breed: 'german shepherd',
        age: 6,
        weight: 35,
    },
];
/* 
const petAgesAndWeight = pets.reduce(
    (acc, cur) => {
        // console.log(acc); -> debug
        if (cur.kind !== 'dog') return acc;
        return {
            totalAges: acc.totalAges + cur.age,
            totalWeight: acc.totalWeight + cur.weight,
        };
    },
    { totalAges: 0, totalWeight: 0 }
);

console.log(`somatória de idade dos cães é: ${petAgesAndWeight.totalAges} anos.`);
console.log(`somatória de peso dos cães é: ${petAgesAndWeight.totalWeight} quilos.`);
 */

const dogsAgesAndWeight = pets
    .filter((pet) => {
        return pet.kind === 'dog';
    })
    .reduce(
        (acc, cur) => {
            return {
                totalAges: acc.totalAges + cur.age,
                totalWeight: acc.totalWeight + cur.weight,
            };
        },
        { totalAges: 0, totalWeight: 0 }
    );
console.log(dogsAgesAndWeight);
