import z from "zod"

const usernameRegex = /^[a-zA-Z0-9]{4,20}$/

const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$!%*?&]?)[A-Za-z\d@$#!%*?&]{8,}$/

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
          .min(8, "A senha deve ter no mínimo 8 caracteres")
          .regex(
            passwordRegex,
            "A senha deve conter pelo menos uma letra e um número"
          ),

        confirmPassword: z
          .string()
          .trim()
          .min(8, "A senha deve ter no mínimo 8 caracteres"),
      })
      .refine((data) => data.password === data.confirmPassword, {
        message: "As senhas devem ser iguais",
        path: ["confirmPassword"],
      }),
    acceptTerms: z.boolean(),
  })
  .required()

declare global {
  type User = z.infer<typeof createUserSchema>
}
