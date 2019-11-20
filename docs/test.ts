interface Article {
  article_id: string
  title: string
  article_content: string
}

interface Comment {
  article_id: string
  comment_id: string
  comment_contet: string
}

type T = Exclude<keyof Article, keyof Comment>
