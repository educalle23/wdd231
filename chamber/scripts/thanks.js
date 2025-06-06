const formInfo = new URLSearchParams(window.location.search);
console.log(formInfo);

const first = formInfo.get('first-name')
const last = formInfo.get('last-name')
const email = formInfo.get('email')
const mobile = formInfo.get('mobile')
const organization = formInfo.get('businessName')
const date = formInfo.get('timestamp')
console.log(date)

const container = document.querySelector('.display-thanks')
container.innerHTML = `
    <h2>Welcome ${first + ' '+ last} </h2>
    <strong><p>Email:</strong> ${email}</p>
    <strong><p>Mobile:</strong> ${mobile}</p>
    <strong><p>Bussines/Organization:</strong>  ${organization}</p>
    <strong><p>You join us at:</strong>  ${date}</p>
`