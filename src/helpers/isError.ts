const isError = (error: unknown): error is IError => {
  if (error && typeof error === "object" && "error" in error) {
    return true
  }
  return false
}

export default isError
