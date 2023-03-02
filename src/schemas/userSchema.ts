import z from "zod"

const usernameRegex = /^[a-zA-Z0-9]{4,20}$/

export const createUserSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(4, "O apelido deve ter no mínimo 4 caracteres")
      .max(20, "O apelido deve ter no máximo 20 caracteres")
      .regex(
        usernameRegex,
        "O apelido deve conter apenas caracteres alfanuméricos"
      ),
    email: z.string().trim().email("E-mail inválido"),
    pass: z
      .object({
        password: z
          .string()
          .trim()
          .min(8, "A senha deve ter no mínimo 8 caracteres"),
        confirmPassword: z
          .string()
          .trim()
          .min(8, "A senha deve ter no mínimo 8 caracteres"),
      })
      .refine((data) => data.password === data.confirmPassword, {
        message: "As senhas devem ser iguais",
        path: ["confirmPassword"],
      }),
  })
  .required()

declare global {
  type User = z.infer<typeof createUserSchema>
}
