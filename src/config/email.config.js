import { SMTPClient } from 'emailjs';
import template from './template.js';

export const sendMail = (data) => {
    const client = new SMTPClient({
        user: 'posadagda2022@gmail.com',
        password: 'eqivnksswrrzjcbk',
        host: 'smtp.gmail.com',
        ssl: true,
        port: 465,
        tls: false,
    });

    // comunicacion.corporativa@gda.mx

    const message = {
        from: 'posadagda2022@gmail.com',
        to: `${data.email}`,
        cc: 'munozzecuayoel@gmail.com hola@registroparacongresos.com',
        subject: 'Mensaje de confirmación de registro a POSADA EMPRESAS ARIES 2022.',
        attachment: [
            { data: template(data.id, data.name, `${data.lastname1} ${data.lastname2}`), alternative: true },
        ],
    };

    client.send(message, function (err, message) {
        console.log(err || message);
    });    
}