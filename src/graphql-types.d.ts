interface MarkdownRemark {
  id: string
  html: string
  frontmatter: Frontmatter
  fields: {
    slug?: string
  }
}

interface Frontmatter {
  title: string
  date: string
}

interface Site {
  siteMetadata: SiteMetadata
}

interface SiteMetadata {
  title: string
  author: string
}
