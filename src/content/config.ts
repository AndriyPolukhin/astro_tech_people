// Import utilities from `astro.content`
import { z, defineCollection } from 'astro:content'
// Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		author: z.string(),
		image: z.string(),
		tags: z.array(z.string()),
	}),
})

// Export a single `collection` object to register your collection(s)
export const collections = {
	blog: blogCollection,
}
