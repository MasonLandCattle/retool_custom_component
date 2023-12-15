import { z } from "zod"

const LoginResponse = z.object({
    authenticated: z.boolean(),
    error: z.string().optional()
  });

  export type LoginResponse = z.infer<typeof LoginResponse>