export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      required: true,
      description: 'E.g.: Using Express as an API Server'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      required: true,
      description: 'The content of the Blog Post'
    },
    {
      name: 'resource',
      title: 'Resource',
      type: 'reference',
      to: [{type: 'resource'}],
      description: 'Which type of Resource is this? Walkthrough? Video? Podcast?'
    },
    {
      name: 'published',
      title: 'Published',
      type: 'boolean',
      description: 'Set to published when this screening should be visible on a front-end'
    },

    {
      name: 'membership',
      title: 'Who can view this content?',
      type: 'string',
      required: true,
      options: {
        list: [{title: 'Members', value: 'members'}, {title: 'Anyone', value: 'anyone'}],
        layout: 'radio'
      }
    },
    {
      name: 'infoUrl',
      title: 'More info at',
      type: 'url',
      description: 'URL to imdb.com, rottentomatoes.com or some other place with reviews, stats, etc'
    },
    {
      name: 'asset',
      title: 'Asset',
      type: 'file',
      description: 'A PDF, a mp3, etc.'
    }
  ],
  preview: {
    select: {
      title: 'title',
      imageUrl: 'technology.poster.asset.url'
    },
    prepare(selection) {
      const {title, imageUrl} = selection
      return {
        title: title,
        imageUrl: imageUrl
      }
    }
  }
}
