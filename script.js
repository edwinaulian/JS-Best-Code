function canDrink(person) {
    const age = person?.age;
    if (age == null) return console.log("You are not a person!");

    const result = canDrinkValueResponse(age);
    console.log(result);
}

function canDrinkValueResponse(age) {
    if (age < 18 && age > 0) return "ora entuk ngombe";
    if (age < 21 && age > 0) return "Not in the US";
    if (age == 0) return "masih bayi lu mau minum";
    return "Yes";
}

const person = {
    age: 20,
}

canDrink(person);