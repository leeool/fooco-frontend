import UseToastStore from "@components/Toast/UseToastStore"
import React from "react"
import { instance } from "src/api/apiCalls"

interface IOptions {
  method: string
  params?: { [key: string]: string }
  data?: { [key: string]: string }
}

const UseFetch = <T,>() => {
  const [data, setData] = React.useState<T | null>(null)
  const [error, setError] = React.useState<null | string>(null)
  const [loading, setLoading] = React.useState<boolean>(false)
  const { setToastMessage } = UseToastStore()

  const request = React.useCallback(async (url: string, options: IOptions) => {
    let response = null
    let error = null
    let data: T | null = null
    setLoading(true)

    try {
      setError(null)
      response = await instance(url, options)
      data = response.data
      if (response.status >= 300) throw new Error(response.request.data.error)
    } catch (err: any) {
      data = null
      if (
        "response" in err &&
        "data" in err.response &&
        "error" in err.response.data
      ) {
        setToastMessage("Algo deu errado", err.response.data.error)
        console.log(err.response.data.error)
      } else if (err instanceof Error) {
        setToastMessage(
          "Erro ao conectar com o servidor",
          "Foquinho está em ação!"
        )
        error = null
      }
    } finally {
      setLoading(false)
      setData(data)
      setError(error)
      return { response, data }
    }
  }, [])

  return { data, error, loading, request }
}

export default UseFetch
