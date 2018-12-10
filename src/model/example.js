import mongoose from 'mongoose'
import paginate from 'mongoose-paginate'

const { Schema } = mongoose
const ExampleSchema = new Schema({
  // blablabla
})

ExampleSchema.plugin(paginate)

export default mongoose.model('example', ExampleSchema)
