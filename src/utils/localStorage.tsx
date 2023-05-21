interface FormDataType {
  id: number
  title: string
  author: string
  date: string
  content: string
}

// Implementing Local Storage
export const saveDataToLocalStorage = (data: FormDataType[]) => {
  localStorage.setItem("formData", JSON.stringify(data))
}
// Get Data from Local Storage
export const getDataFromLocalStorage = () => {
  const storedData = localStorage.getItem("formData")
  if (storedData) {
    return JSON.parse(storedData)
  }
  return []
}
