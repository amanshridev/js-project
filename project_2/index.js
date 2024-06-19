// console.log("working")

let form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let weight = parseInt(document.querySelector('#weight').value)
    let height = parseInt(document.querySelector('#height').value)

    let results = document.querySelector('#results')
    if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Enter a valid Weight ${weight}`
    } else if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Enter a valid Height ${height}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
    }
})