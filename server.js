const express = require("express");

const app = express();
const PORT = 3000;


app.use(express.json());


let tickets = [];
let nextId = 1;


//Read all tickets
app.get("/tickets", (req, res) => {
    res.status(200).json(tickets);
});

//Consult by ID
app.get("/tickets/:id", (req, res) => {
    const id = Number(req.params.id);
    const ticket = tickets.find((t) => t.id === id);

    if (!ticket) {
        return res.status(404).json({
            error: "Pedido não encontrado"
        });
    }

    res.status(200).json(ticket);
});

// Create a new ticket
app.post("/tickets", (req, res) => {
    const { title, description } = req.body;

    if(
        typeof title !== "string" ||
        !title.trim() ||
        typeof description !== "string" ||
        !description.trim()
    ) {
        return res.status(400).json({
            error: "Título e descrição são obrigatórios"
        });
    }

    const ticket = {
        id: nextId++,
        title: title.trim(),
        description: description.trim(),
        status: "aberto",
        createdAt: new Date().toISOString()
    };
    tickets.push(ticket);
    res.status(201).json(ticket);
});

// Update a ticket by ID
app.put("/tickets/:id", (req, res) => {
    const id = Number(req.params.id);
    const { title, description, status } = req.body;

    const index = tickets.findIndex((t) => t.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: "Pedido não encontrado"
        });
    }
    tickets[index] = {
        id,
        title: title.trim(),
        description: description.trim(),
        status
    };

    res.status(200).json(tickets[index]);
});

// Delete a ticket by ID
app.delete("/tickets/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = tickets.findIndex((t) => t.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: "Pedido não encontrado"
        });
    }

    tickets.splice(index, 1);

    res.status(204).end();

});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});