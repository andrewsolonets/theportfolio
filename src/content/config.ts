// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techStack: z.array(z.string()),
    image: z.string(),
    githubUrl:z.string().optional(),
    liveUrl:z.string().optional(),
    index:z.number()
  }),
});



// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'projects': projectsCollection,
};