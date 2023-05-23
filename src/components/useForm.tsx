import { useState } from "react"

export const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues)

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const resetForm = () => {
    setValues(initialValues)
  }

  return [values, handleChange, resetForm]
}
