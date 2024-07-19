import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pressReleases',
  title: 'Press Releases',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tags'}}],
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background image',
      type: 'image',
      description: 'Please upload an image with dimensions 2440 x 1578 px.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      description: 'Please upload an image with dimensions 1500 x 700 px.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bannerImage',
      title: 'Banner image',
      type: 'image',
      description: 'Please upload an image with dimensions 800 x 800 px.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
