import app from './src/Controllers/app.js'

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`servidor escutando em http://localhost:${port}`)
});