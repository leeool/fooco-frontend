import React from "react"
import { Container, Item } from "./GrupoSelect.styled"
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@components/Form/Select/Select"
import { useQuery } from "react-query"
import { instance } from "src/api/apiCalls"
import { Point } from "@assets/index"

interface Props {
  setGroupId: React.Dispatch<React.SetStateAction<string>>
}

const GrupoSelect = ({ setGroupId }: Props) => {
  const { data } = useQuery<IGroup[]>({
    queryKey: "groups",
    queryFn: async () => {
      return instance("/group").then((res) => res.data)
    },
  })

  return (
    <Container>
      <Select
        defaultValue="7e170c4f-a480-4503-aee6-e7071c9c6dd5"
        onValueChange={(v) => setGroupId(v)}
      >
        <SelectGroup>
          <SelectLabel>Florestas</SelectLabel>
          {data?.map((group) => (
            <SelectItem value={group.id} key={group.id}>
              <Item>
                <Point /> <span>Floresta/{group.name}</span>
              </Item>
            </SelectItem>
          ))}
        </SelectGroup>
      </Select>
    </Container>
  )
}

export default GrupoSelect
