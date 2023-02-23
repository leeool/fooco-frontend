import Button from "@components/Form/Button"
import React from "react"
import { useNavigate } from "react-router"
import useUserStore from "src/stores/UseUserStore"
import { Container } from "./style"

const index = () => {
  const { userData, loading, logoutUser } = useUserStore()
  const navigate = useNavigate()

  const handleClick = () => {
    logoutUser()
    navigate("/inicio")
  }

  if (!userData) return null
  if (loading) return <h1>Carregando...</h1>
  return (
    <Container>
      <div>
        <h1>{userData.username}</h1>
        <p>{userData.email}</p>
      </div>
      <Button variant="outlined" onClick={handleClick}>
        Sair
      </Button>
    </Container>
  )
}

export default index
