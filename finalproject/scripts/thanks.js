const formInfo = new URLSearchParams(window.location.search);

const completeName = formInfo.get('complete-name');
const email = formInfo.get('email');


const container = document.querySelector('.display-thanks')
container.innerHTML = `
    <h2>Thanks for join to our Newsletter <span id="name">${completeName}</span></h2>
    <p>All our weekly emails are getting to <strong>${email}</strong></p>
`;