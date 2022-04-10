const person = {
    age: 22,
}

function canDrink(person) {
    const age = person?.age;
    if (age == null) return console.log("You are not a person!");

    const result = canDrinkValueResponse(age);
    console.log(result);
}

function canDrinkValueResponse(age) {
    if (age < 18 && age > 0) return "ora entuk ngombe";
    if (age < 21 && age > 0) return "Not in the us";
    if (age == 0) return "masih bayi lu ga usah banyak gaya, mau minum bear";
    return "Yes, you boleh minum sepuasnya sampai sober";
}

canDrink(person);