import { SMTPClient } from 'emailjs';
import template from './template.js';

export const sendMail = (data) => {
    const client = new SMTPClient({
        user: 'femegcongreso@gmail.com',
        password: 'mozbiqemtolsqrmr',
        host: 'smtp.gmail.com',
        ssl: true,
        port: 465,
        tls: false,
    });

    const message = {
        from: 'femegcongreso@gmail.com',
        to: `${data.email}`,
        cc: 'munozzecuayoel@gmail.com comunicacion.corporativa@gda.mx hola@registroparacongresos.com',
        subject: 'Mensaje de confirmación de registro a POSADA EMPRESAS ARIES 2022.',
        attachment: [
            { data: template(data.id, data.name, `${data.lastname1} ${data.lastname2}`), alternative: true },
        ],
    };

    client.send(message, function (err, message) {
        console.log(err || message);
    });    
}