import React from "react"
import { Avatar } from "@components/User/Avatar"
import { Hashtag, Hat, Plus } from "@assets/index"
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
} from "./styles"
import { DialogContent, DialogRoot, DialogTrigger } from "@components/Dialog"
import { Button, Input } from "@components/Form"
import { Title } from "@components/Text/Title"
import { Controller, useForm } from "react-hook-form"
import UseFetch from "src/hooks/UseFetch"
import { USER_PUT } from "src/api/apiCalls"
import ReactLoading from "react-loading"

const ProfilePreview = () => {
  const { userData, loading, tags } = useUserStore()

  if (loading || !userData)
    return <ReactLoading type="spin" color="#E63A23" height={50} width={50} />
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
        <Button variant="solid" loading={loading} disabled={loading}>
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
