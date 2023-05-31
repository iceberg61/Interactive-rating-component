const form = document.getElementById('form');
const ratings = document.getElementsByName('rate');
let finalScore = 0;
ratings.forEach(rating => {
    rating.addEventListener('click', (event) => {
        const currentRating = Number(event.target.getAttribute('value'))
        finalScore = currentRating;
        console.log(currentRating);

        const label = document.getElementsByClassName('label');
        for (let index = 0; index < label.length; index++) {
            if (index < currentRating) {
                label[index].classList.add('highlight')
            } else {
                label[index].classList.remove('highlight')
            }
        }
    });
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const rating = document.getElementById('rating');
    const message = document.getElementById('message');
    let completed__ratings = document.getElementsByClassName('complete__rating');

    completed__ratings[0].innerText = `You selected ${finalScore} out of 5`

    if (!finalScore) {
        alert('Please Select a score before submitting');
        return;
    }

    rating.classList.add('hidden');
    message.classList.add('visible');
});