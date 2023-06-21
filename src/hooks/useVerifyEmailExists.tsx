import React from "react"
import { useMutation } from "react-query"
import { GET_USERS, instance } from "src/api/apiCalls"

const useVerifyEmailExists = () => {
  const {
    mutateAsync: mutateEmailExists,
    data: dataEmailExists,
    isLoading: loadingEmailExists,
  } = useMutation({
    mutationKey: "verifyEmailExists",
    mutationFn: async (email: string) => {
      const { url, options } = GET_USERS()

      return instance.get(`${url}?email=${email}`).then((res) => res.data)
    },
    onSuccess: (data) => {
      // console.log(data)
    },
  })

  return { mutateEmailExists, dataEmailExists, loadingEmailExists }
}

export default useVerifyEmailExists
