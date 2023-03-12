import React from "react"
import { Avatar } from "@components/User/Avatar"
import { Hashtag, Hat, Plus, Point } from "@assets/index"
import useUserStore from "src/stores/UseUserStore"
import {
  About,
  Banner,
  Container,
  Description,
  UserData,
  Username,
  Separator,
  Item,
  Tags,
  NewTagContainer,
  TagsDialog,
  Points,
} from "./styles"
import { DialogContent, DialogRoot, DialogTrigger } from "@components/Dialog"
import { Button, Input } from "@components/Form"
import { Title } from "@components/Text/Title"
import { Controller, useForm } from "react-hook-form"
import UseFetch from "src/hooks/UseFetch"
import { USER_PUT } from "src/api/apiCalls"
import ReactLoading from "react-loading"
import getUserPoints from "src/helpers/getUserPoints"
import SkeletonLoad from "src/helpers/Skeleton"
import Skeleton from "react-loading-skeleton"

const ProfilePreview = () => {
  const { userData, loading, isLoggedIn } = useUserStore()

  if (loading || !userData)
    return (
      <Container>
        <SkeletonLoad>
          <UserData>
            <div className="user-info">
              <Skeleton width={"7rem"} count={1} height={"7rem"} circle />
              <Skeleton
                width={"100%"}
                count={1}
                height={30}
                borderRadius={"10px"}
              />
              <Skeleton
                width={"100%"}
                count={1}
                height={30}
                borderRadius={"10px"}
              />
            </div>
          </UserData>
          <Separator />
          <About>
            <Skeleton
              width={"100%"}
              count={3}
              height={15}
              borderRadius={"5px"}
            />
            <Item>
              <Hat />
              <Skeleton
                width={200}
                count={1}
                height={15}
                borderRadius={"5px"}
              />
            </Item>
          </About>
        </SkeletonLoad>
      </Container>
    )
  if (!isLoggedIn) return null
  return (
    <Container>
      <UserData>
        <Banner src="https://placekitten.com/800/500" />
        <div className="user-info">
          <Avatar
            src=""
            fallback={userData.username.slice(0, 2)}
            delayMs={500}
          />
          <Username>@{userData.username}</Username>
          <Points>
            <Point />
            {getUserPoints(userData)}
          </Points>
        </div>
      </UserData>
      <Separator />
      <About>
        <Description>
          Aluno de Informática na ETEC Adolpho Berezin. Minha paixão é a
          programação. Curto músicas para relaxar.
        </Description>
        <Item>
          <Hat />
          <span>ETEC Adolpho Berezin</span>
        </Item>
        {/* <Tags>
          {userData.tags.concat(...tags).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
          <DialogRoot>
            <DialogTrigger>
              <span className="add">
                <Plus />
              </span>
            </DialogTrigger>
            <DialogContent>
              <AddNewTag userData={userData} />
            </DialogContent>
          </DialogRoot>
        </Tags> */}
      </About>
    </Container>
  )
}

const AddNewTag = ({ userData }: { userData: IUserData }) => {
  const { tags, setTag } = useUserStore()
  const { handleSubmit, control } = useForm()
  const { request, loading } = UseFetch<IUserData>()

  const submitTag = handleSubmit(async (fieldValues) => {
    if (tags.includes(fieldValues.newtag)) {
      return
    }

    const { url, options } = USER_PUT(
      { tags: [...userData.tags, fieldValues.newtag] },
      userData.id
    )

    const response = await request(url, options)

    if (!response.error) {
      setTag([...tags, fieldValues.newtag])
    }
  })

  return (
    <NewTagContainer>
      <Title size="lg">Adicionar nova tag</Title>
      <form onSubmit={submitTag}>
        <Controller
          defaultValue={""}
          control={control}
          name="newtag"
          render={({ field: { onChange, onBlur, ref } }) => (
            <Input
              label="Nova Tag"
              type="text"
              id="newtag"
              placeholder="Digite uma nova tag"
              icon={<Hashtag />}
              onChange={onChange}
              onBlur={onBlur}
              innerRef={ref}
            />
          )}
        />
        <Button variant="solid" disabled={loading}>
          Adicionar
        </Button>
      </form>
      <TagsDialog>
        {userData.tags.concat(...tags).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagsDialog>
    </NewTagContainer>
  )
}

export default ProfilePreview
