import { SMTPClient } from 'emailjs';
import template from './template.js';

export const sendMail = (data) => {
    const client = new SMTPClient({
        user: 'posadagda20221@gmail.com',
        password: 'uugxujdhinqvxcku',
        host: 'smtp.gmail.com',
        ssl: true,
        port: 465,
        tls: true,
    });

    // comunicacion.corporativa@gda.mx

    const message = {
        from: 'posadagda20221@gmail.com',
        to: `${data.email.toLowerCase()}`,
        cc: 'munozzecuayoel@gmail.com, hola@registroparacongresos.com',
        subject: 'Mensaje de confirmación de registro a POSADA EMPRESAS ARIES 2022.',
        attachment: [
            { data: template(data.id, data.name, `${data.lastname1} ${data.lastname2}`), alternative: true },
        ],
    };

    client.send(message, function (err, message) {
        console.log(err || message);
    });    
}