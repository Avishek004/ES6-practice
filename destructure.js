const person = { name: "Avishek Talukdar", age: 20, Job: "Web Dev", Mobile: "01706499331" };

const { name, Job, Mobile } = person;
console.log(name, Job, Mobile);


const Letters = ['A', 'B', 'C', 'D', 'E'];
const [first, Second, ...Rest] = Letters;
console.log(first, Second, Rest);


const complexObject = {
    name: 'abc',
    info: {
        address: 'Bagbari',
        leader: 'kola Bhai'
    },
};

const { leader } = complexObject.info;
console.log(leader);