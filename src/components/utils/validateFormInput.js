/* eslint-disable import/no-anonymous-default-export */

export default (data, schema) => {

  const { error } = schema.validate(data, {abortEarly: false})
  if (!error) return null
  const errors = {}
  for (let item of error.details) {
    errors[item.path[0]] = item.message
  } 

 return errors
}