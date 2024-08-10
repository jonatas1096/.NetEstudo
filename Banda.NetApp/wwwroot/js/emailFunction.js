// Inicialize o EmailJS com seu User ID
emailjs.init('service_p4z3j2l');

// Manipule o envio do formulário
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    // Envia o formulário com EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function (response) {
            alert('E-mail enviado com sucesso!');
            console.log('Success:', response);
        }, function (error) {
            alert('Erro ao enviar o e-mail.');
            console.log('Error:', error);
        });
});
