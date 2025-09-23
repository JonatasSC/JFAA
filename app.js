const express = require("express")
const routes = require("./src/routes")
const app = express()
const path = require("path")
const { default: axios } = require("axios")
require("dotenv").config();
const port = process.env.PORT

app.set('views', path.join(__dirname, 'views'))
app.use(express.static('assets'))
app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3004/jfaa/biblia/versiculo/aleatorio')
    res.render('index', { versiculo: response.data.versiculo})
  } catch (error) {
    console.error("internal server Error", error.message)
    res.render("index", { versiculo: null })
  }
})

async function startServer() {
  try {

    routes(app)

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}!`)
    })

  } catch (error) {
    console.error("Erro  ao inicializar o servidor. ", error)
  }
}

startServer();