import './config/dotenv'
import express from 'express'
import path from 'path'
import logger from 'morgan'
import bodyParser from 'body-parser'
import responseEnhancer from 'express-response-formatter'
import cors from 'cors'
import validator from 'express-validator'
import rootRouter from './routes'
import rootMongoose from './config/mongodb'

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'uploads')))
app.use(responseEnhancer())
app.use(cors())
app.use(validator())

rootRouter(app)
rootMongoose()

// catch 404 and forward to error handler
app.use((req, res) => {
  res.formatter.notFound({
    message: 'resource is not found',
    url: req.originalUrl,
  })
})

// error handler
app.use((err, req, res) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.formatter.serverError('internal server error')
})

export default app
