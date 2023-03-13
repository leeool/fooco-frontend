const formatDate = (date: string) => {
  const newDate = new Date(date).toLocaleString("pt-BR")

  return newDate
}

export default formatDate
