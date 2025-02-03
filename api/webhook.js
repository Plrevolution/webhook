const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

router.post('/', (req, res) => {
    const event = req.body.event;
    switch (event) {
        case 'event1':
            // Lógica para tratar o evento 1
            console.log('Evento 1 recebido');
            break;
        case 'event2':
            // Lógica para tratar o evento 2
            console.log('Evento 2 recebido');
            break;
        default:
            console.log(`Evento não reconhecido: ${event}`);
    }
    res.json({ received: true });
});

module.exports = router;