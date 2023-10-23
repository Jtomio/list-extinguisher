import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const listSchema = z.object({
  id: z.string(),
  label: z.string(),
  name: z.string(),
  manufacturing: z.string(),
  type: z.string(),
  weight: z.string(),
  dateDue: z.string(),
  dateTest: z.string(),
  place: z.string(),
  area: z.string(),
})

export type List = z.infer<typeof listSchema>
