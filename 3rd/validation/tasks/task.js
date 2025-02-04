const yup = require("yup");

const tasksSchema = yup.object({
  title: yup.string().required(), // Rule 
})

module.exports = tasksSchema;