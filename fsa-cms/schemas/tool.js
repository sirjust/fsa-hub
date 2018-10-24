import icon from 'react-icons/lib/md/person'

export default {
  name: 'tool',
  title: 'Meta Tools',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of Tool'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100
      }
    },
      {
          name: 'overview',
          title: 'Overview',
          type: 'blockContent'
      },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {title: 'name', media: 'image'}
  }
}
