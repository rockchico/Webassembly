// https://blog.risingstack.com/node-hero-tutorial-getting-started-with-node-js/

const express = require('express')
const app = express()

const path = require('path')
const exphbs = require('express-handlebars')


app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (request, response) => {
  response.render('home', {
    name: 'John'
  })
})

app.listen(3000)