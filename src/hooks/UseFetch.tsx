import React from "react"
import { instance } from "src/api/apiCalls"

interface IOptions {
  method: string
  params?: { [key: string]: string }
  data?: { [key: string]: string }
}

const UseFetch = () => {
  const [data, setData] = React.useState<any | null>(null)
  const [error, setError] = React.useState<null | string>(null)
  const [loading, setLoading] = React.useState<boolean>(false)

  const request = React.useCallback(async (url: string, options: IOptions) => {
    let response = null
    let error = null
    let data = null
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
        error = err.response.data.error
      } else if (err instanceof Error) {
        error = err.message
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
