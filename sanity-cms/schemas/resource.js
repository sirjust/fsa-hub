export default {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      required: true
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        auto: true
      }
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'blockContent'
    },
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },

    {
      name: 'language',
      title: 'Languages',
      type: 'array',
      of: [{type: 'resource'}]
    }
  ],

  preview: {
    select: {
      title: 'title',
      date: 'releaseDate.utc',
      imageUrl: 'poster.asset.url'
    },
    prepare(selection) {
      const {date, imageUrl} = selection
      return Object.assign({}, selection, {
        subtitle: date && date.utc ? date.utc.split('-')[0] : '',
        imageUrl: imageUrl ? `${imageUrl}?w=100` : imageUrl
      })
    }
  }
}
