
import { z } from "zod"

const Job = z.object({
    id: z.number(),
    number: z.string(),
    otherTags: z.array(z.number()),
    jobStatus: z.string(),
    next_apt_str: z.union([z.string(), z.null()]).optional(),
    days_old: z.union([z.number(), z.null()]),
    businessUnitId: z.number()

    // Add other properties for the job object - Future
  });
  
  const Phase = z.object({
    include_ids: z.array(z.number()),
    exclude_ids: z.array(z.number()).optional(),
    job_status: z.array(z.string()).optional(),
    name: z.string(),
    jobs: z.array(Job),
  });
  
export const PhaseDataSchema = z.record(Phase);


export type PhaseData = z.infer<typeof PhaseDataSchema>
export type Phase = z.infer<typeof Phase>
export type JobData = z.infer<typeof Job>;

export type JobsList = PhaseData[keyof PhaseData]["jobs"];