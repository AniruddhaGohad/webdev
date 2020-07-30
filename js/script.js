const person = ["Aniruddha", "Gohad", "Address....", "Age.."];

const name = person[0];
const surname = person[1];

// ARRAY DESTRUCTURING..
const [personName, personSurname] = person;
// SPREAD OPERATOR = ...
const newPersonArray = [...person];

const useState = (name) => {
    const setName = (changedName) => {
        name = changedName;
    }
    return [name, setName]
}

const [name, setName] = useState("Aniruddha");

