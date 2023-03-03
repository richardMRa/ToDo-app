const PORT = process.env.PORT ?? 8000
const express = require('express')
const cors = require('cors')
const pool = require('./db')


const app = express()
app.use(cors())



// --------------- ROUTING ---------------
//Home
app.get('/', (req,res) => {
    res.send('Sí')
})
// Get todos
app.get('/todos', async (req, res) => {
    try {
        const todos = await pool.query('SELECT * FROM todos')
        res.json(todos.rows)
    } catch (error) {
        console.log(error)
    }
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})