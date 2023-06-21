import { getAuth, signInWithPopup, OAuthProvider, User } from "firebase/auth"
import { USER_POST, instance } from "src/api/apiCalls"
import app from "src/api/firebaseConfig"
import useUserStore from "src/stores/UseUserStore"
import React from "react"
import UseToastStore from "@components/Toast/UseToastStore"
import { useMutation } from "react-query"
import useUserLogin from "src/hooks/useUserLogin"

const auth = getAuth(app)
const microsoftProvider = new OAuthProvider("microsoft.com")

interface IData {
  username: string
  email: string
  uid: string
}

const useLoginSocialUser = () => {
  const { loginUser, setLoading, validateUser } = useUserStore()
  const { setToastMessage } = UseToastStore()
  const { mutateUserLogin } = useUserLogin()
  const { mutateAsync } = useMutation({
    mutationKey: "loginSocial",
    mutationFn: async (data: IData) => {
      const { options, url } = USER_POST(data.username, data.email, data.uid)
      return instance.post(url, options.data).then((res) => res.data)
    },
    onSuccess: async (data, variables) => {
      setToastMessage("Sucesso", "Usuário criado com sucesso!", "success")
      await loginUser(variables.email, variables.uid)
    },
    onError: (error) => {
      console.log(error)
      setToastMessage("Erro", "Não foi possível criar o usuário", "error")
    },
  })

  const loginUserSocial = async (user: User) => {
    const email = user.providerData[0].email
    const password = user.uid
    const username =
      user.providerData[0]
        .displayName!.split(" ")
        .join("_")
        .slice(0, 10)
        .toLowerCase() + Math.floor(Math.random() * 100)

    if (!user || !email || !password || !username) return

    await mutateUserLogin(
      { email, password: user.uid },
      {
        onSuccess: async () => {
          await validateUser()
        },
        onError: async () => {
          await mutateAsync({ username, email, uid: user.uid })
        },
      }
    )
    setLoading(false)

    return
  }

  const loginWithMicrosoft = async () => {
    try {
      const result = await signInWithPopup(auth, microsoftProvider)
      const credential = OAuthProvider.credentialFromResult(result)
      if (!credential) return

      setLoading(true)

      await loginUserSocial(result.user)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return {
    loginWithMicrosoft,
    loginUserSocial,
  }
}

export default useLoginSocialUser
