const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const results = (document.querySelector('#results'))

    if (height == "" || height < 0 || isNaN(height)) {
        results.innerHTML = 'Please give Valid input for height'
    }
    else if (weight == "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Please give Valid input for weight'
    }
    else {
        const bmi = (weight / ((height / 100) * (height / 100)).toFixed(2))
        results.innerHTML = `Your BMI is ${bmi}`
        if (bmi < 18.6) {
            results.innerHTML = `Your BMI is ${bmi} Underweight`
        }
        if (bmi > 18.6 && bmi < 24.9) {
            results.innerHTML = `Your BMI is ${bmi} Normal Range`
        }
        if (bmi > 24.9) {
            results.innerHTML = `Your BMI is ${bmi} Overweight`
        }
    }

})