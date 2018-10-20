import icon from 'react-icons/lib/md/local-movies'

export default {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100
      }
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'blockContent'
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string'
    },
    // {
    //   name: 'externalId',
    //   title: 'External ID',
    //   type: 'number'
    // },
    // {
    //   name: 'popularity',
    //   title: 'Popularity',
    //   type: 'number'
    // },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
  ],
  preview: {
    select: {
      title: 'title',
      // date: 'releaseDate',
      media: 'logo',
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('-')[0]

      return {
        title: `${selection.title} ${year ? `(${year})` : ''}`,
        date: selection.date,
        subtitle: 'Subtitle',
        media: selection.media
      }
    }
  }
}
