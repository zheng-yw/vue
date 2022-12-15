module.exports = [
  {
    name: 'cname',
    type: 'input',
    message: 'Please enter the component name.',
    validate: input => !!input,
    default: 'Hello'
  },
  {
    name: 'eui',
    type: 'confirm',
    message: 'Install element-ui ?',
    default: true
  }
]