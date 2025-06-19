const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

// Sample JSON data
const books = [
  { id: 1, title: "Atomic Habits", author: "James Clear" },
  { id: 2, title: "Ikigai", author: "Francesc Miralles" },
  { id: 3, title: "The Alchemist", author: "Paulo Coelho" }
];

app.get("/", (req,res) => {
    res.send("hey it's working");
})

// Route
app.get("/books", (req, res) => {
  res.json(books);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
