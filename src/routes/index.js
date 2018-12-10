import exampleRouter from './example'

const withRoutePrefix = route => `${process.env.PREFIX_API_URL}/${route}`

export default (app) => {
  app.use(withRoutePrefix('examples'), exampleRouter)
}
