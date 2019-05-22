const express = require('express');

const app = express();

app.get('/api/customers', (req, res)=>{
    const customers = [
        { id: 1, firstName: 'Josh'},
        { id: 2, firstName: 'Justin' },
        { id: 3, firstName: 'Jorge' }
    ]
    res.json(customers);
})

const PORT = 5000;

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));
