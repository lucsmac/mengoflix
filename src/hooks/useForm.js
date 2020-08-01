import React from 'react'

const useForm = (model) => {
  const [valorAtual, setValorAtual] = React.useState(model)

  const handleChange = ({ target }) => {
    setValorAtual((valorAtual) => {
      return {
        ...valorAtual,
        [target.id]: target.value
      }
    })
  }

  const clearForm = () => {
    setValorAtual(model)
  }

  return {
    valorAtual,
    handleChange,
    clearForm
  }
}

export default useForm