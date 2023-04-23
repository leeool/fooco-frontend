import { z } from "zod"

export const createPostSchema = z.object({
  title: z
    .string()
    .trim()
    .min(5, "Título muito curto")
    .max(80, "Título muito longo"),
  tags: z.string().trim().max(100).optional(),
})

declare global {
  type Post = z.infer<typeof createPostSchema>
}
