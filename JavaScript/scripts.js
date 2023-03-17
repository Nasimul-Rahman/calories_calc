// to check whether srcript file is loading

console.log("Woking!")

// event listener for form that asks user for food name and amount

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formEl);

    const data = Object.fromEntries(formData);
    console.log(data.food_name)

    console.log(localStorage.getItem(data.food_name))

    // let data_serialized = JSON.stringify(data);

    // console.log(data_serialized)



    // let data_deserialized = JSON.parse(localStorage.getItem(1));

    // let fname = data_deserialized.fname;

    // console.log(fname);

    let food_cal = (localStorage.getItem(data.food_name)/100)*data.amount;

    console.log(food_cal)

    document.getElementById("p2").innerHTML = food_cal + " Calories";
});

// event listener that inputs new food items within local storage

const formEl_2 = document.querySelector('.form_2');

formEl_2.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formEl_2);

    const data = Object.fromEntries(formData);
    console.log(data);

    localStorage.setItem(data.food_name, data.calories);
})
