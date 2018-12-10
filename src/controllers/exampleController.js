import Example from '../model/example'

const exampleCreate = async (req, res) => {
  const example = new Example({ /* blablabla */ })
  try {
    const saveExample = await example.save()
    res.formatter.created(saveExample)
  } catch (err) {
    res.formatter.serverError(err)
  }
}

export {
  exampleCreate,
}
