import UseToastStore from "@components/Toast/UseToastStore"
import { AxiosError } from "axios"
import React from "react"
import { MutationOptions } from "react-query"
import { USER_PUT, instance } from "src/api/apiCalls"

interface IData {
  modifiedData: Partial<
    IUserData & {
      password: string
      savedPostsId: string[]
    }
  >
  userId: string
}

const mutateProfileEdit = (
  userId: string | undefined
): MutationOptions<IUserData, unknown, IData> => {
  const { setToastMessage } = UseToastStore()

  return {
    mutationKey: ["profileEdit", userId],
    mutationFn: async (data: IData) => {
      if (!userId) return Promise.reject("User id is undefined")

      const { options, url } = USER_PUT(data.modifiedData, data.userId)

      return instance
        .put(url, options.data, { headers: options.headers })
        .then((res) => res.data)
    },
    onSuccess: () => {
      console.log("success")
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        setToastMessage(
          "Algo deu errado",
          err.response?.data.error || "Foquinho está com problemas",
          "error"
        )
      }
    },
  }
}

export default mutateProfileEdit
