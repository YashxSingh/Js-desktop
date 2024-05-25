const form = document.querySelector('form')

form.addEventListener('click', (e) => {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const bmi = (weight/((height**2)/10000)).toFixed(2);
    result.innerHTML=`<span>${bmi}</span>`;
    window.alert(`${bmi} overweight`)
})

