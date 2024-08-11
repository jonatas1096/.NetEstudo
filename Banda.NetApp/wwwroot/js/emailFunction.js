// EmailJS  ID
function sendEmail() {
    let params = {
        name: document.getElementById('nameInput').value,
        email: document.getElementById('emailInput').value,
    }

    emailjs.send('service_p4z3j2l', 'template_pn2q2up', params).then(alert('Entraremos em contato com você!'))

}
