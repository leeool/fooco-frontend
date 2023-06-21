import UseToastStore from "@components/Toast/UseToastStore"
import { AxiosError } from "axios"
import React from "react"
import { useMutation } from "react-query"
import { USER_LOGIN, instance } from "src/api/apiCalls"

interface ILoginData {
  email: string
  password: string
}

const useUserLogin = () => {
  const { setToastMessage } = UseToastStore()
  const {
    mutateAsync: mutateUserLogin,
    isLoading: loadingUserLogin,
    error: errorUserLogin,
  } = useMutation({
    mutationKey: "login",
    mutationFn: async (data: ILoginData) => {
      const { url, options } = USER_LOGIN(data.email, data.password)

      return instance.post(url, options.data).then((res) => res.data)
    },
    onSuccess: (data) => {
      console.log(data)
      setToastMessage("Sucesso!", "Login realizado com sucesso!", "success")
      localStorage.setItem("token", data.token)
    },
    onError: (err) => {
      console.log(err)
      if (err instanceof AxiosError) {
        setToastMessage("Algo deu errado", err.response?.data.error, "error")
      }
    },
  })

  return { mutateUserLogin, loadingUserLogin, errorUserLogin }
}

export default useUserLogin
