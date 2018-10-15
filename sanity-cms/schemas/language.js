export default {
  name: 'language',
  title: 'Language',
  type: 'object',
  fields: [
    {
      name: 'tech',
      title: 'Tech',
      type: 'string'
    },
  ],
  preview: {
    select: {
      name: 'tech.name',
      imageUrl: 'tech.image.asset.url'
    },
    prepare(selection) {
      const {name, imageUrl} = selection
      return {
        title: name,
        subtitle: `${job} [${department}]`,
        imageUrl: imageUrl
      }
    }
  }
}
