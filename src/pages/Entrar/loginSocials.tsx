import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  OAuthProvider,
  User,
} from "firebase/auth"
import { USER_POST } from "src/api/apiCalls"
import app from "src/api/firebaseConfig"
import UseFetch from "src/hooks/UseFetch"
import useUserStore from "src/stores/UseUserStore"
import React from "react"
import UseToastStore from "@components/Toast/UseToastStore"

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const microsoftProvider = new OAuthProvider("microsoft.com")

const useLoginSocialUser = () => {
  const { loginUser, setLoading } = useUserStore()
  const { request } = UseFetch<IUserData>()
  const { setToastMessage } = UseToastStore()

  const loginUserSocial = async (user: User) => {
    if (!user || !user.displayName || !user.email || !user.uid) return

    const { request: loginResponse } = await loginUser(user.email, user.uid)
    if (loginResponse) return

    setLoading(true)
    const provUsername =
      user.displayName.split(" ").join("_").slice(0, 10).toLowerCase() +
      Math.floor(Math.random() * 1000)

    const { options, url } = USER_POST(provUsername, user.email, user.uid)

    await request(url, options)
    await loginUser(user.email, user.uid)

    setLoading(false)

    return
  }

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const credential = GoogleAuthProvider.credentialFromResult(result)
      if (!credential) return

      await loginUserSocial(result.user)
    } catch (error) {
      setToastMessage("Erro ao fazer login com o Google", "error")
    }
  }

  const loginWithGithub = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider)
      const credential = GithubAuthProvider.credentialFromResult(result)
      if (!credential) return
      await loginUserSocial(result.user)
    } catch (error) {
      console.log(error)
    }
  }

  const loginWithMicrosoft = async () => {
    try {
      const result = await signInWithPopup(auth, microsoftProvider)
      const credential = OAuthProvider.credentialFromResult(result)
      if (!credential) return

      await loginUserSocial(result.user)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    loginWithGithub,
    loginWithGoogle,
    loginWithMicrosoft,
    loginUserSocial,
  }
}

export default useLoginSocialUser
