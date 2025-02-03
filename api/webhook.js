module.exports = (req, res) => {
    if (req.method === 'POST') {
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
    } else {
        res.status(405).send('Método não permitido');
    }
};
