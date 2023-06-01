import { z } from "zod"

export const updateUserSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(4, "Seu apelido é muito curto!")
      .max(20, "Seu apelido é muito longo!")
      .regex(
        /^[a-zA-Z0-9_-]{4,20}$/g,
        "Seu apelido deve conter apenas caracteres alfanuméricos"
      )
      .optional(),
    educational_place: z.string().optional(),
    about: z.string().max(300).optional(),
  })
  .required()

declare global {
  type UserUpdate = z.infer<typeof updateUserSchema>
}
