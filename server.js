const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

const ideasFile = path.join(__dirname, 'ideas.json');

// GET /ideas: Read and return ideas
app.get('/ideas', (req, res) => {
    fs.readFile(ideasFile, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            // If file doesn't exist, return empty array
            if (err.code === 'ENOENT') {
                return res.json([]);
            }
            return res.status(500).json({ error: 'Failed to read ideas' });
        }
        try {
            res.json(JSON.parse(data));
        } catch (parseErr) {
            console.error(parseErr);
            res.status(500).json({ error: 'Failed to parse ideas' });
        }
    });
});

// POST /ideas: Add a new idea
app.post('/ideas', (req, res) => {
    const newIdea = req.body;
    if (!newIdea || !newIdea.title || !newIdea.desc) {
        return res.status(400).json({ error: 'Invalid idea data' });
    }

    fs.readFile(ideasFile, 'utf8', (err, data) => {
        let ideas = [];
        if (!err) {
            try {
                ideas = JSON.parse(data);
            } catch (parseErr) {
                console.error("Error parsing existing JSON, starting fresh:", parseErr);
                ideas = [];
            }
        } else if (err.code !== 'ENOENT') {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read ideas' });
        }

        ideas.push(newIdea);

        fs.writeFile(ideasFile, JSON.stringify(ideas, null, 2), (writeErr) => {
            if (writeErr) {
                console.error(writeErr);
                return res.status(500).json({ error: 'Failed to save idea' });
            }
            res.status(201).json(ideas);
        });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
