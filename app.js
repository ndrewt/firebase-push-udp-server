require('dotenv').config();
const dgram = require('dgram');
const admin = require('firebase-admin');

const udpServer = dgram.createSocket('udp4');

const serviceAccount = {
    type: process.env.TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: process.env.AUTH_URI,
    token_uri: process.env.TOKEN_URI,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL
};

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

udpServer.on('message', (msg) => {
    const message = JSON.parse(msg.toString());

    const fcmMessage = {
        notification: {
            title: message.title,
            body: message.text
        },
        token: message.fcmToken
    };

    admin.messaging().send(fcmMessage)
        .then(response => console.log('Successfully sent FCM message:', response))
        .catch(error => console.error('Error sending FCM message:', error));
});

const PORT = process.env.INIT_SERVICE_PORT || 41234;

udpServer.bind(PORT, () => console.log(`UDP server listening on port ${PORT}`));