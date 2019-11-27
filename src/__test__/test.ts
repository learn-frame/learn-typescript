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

interface User {
  id: number
  username: string
  password: string
}

const user: User = {
  id: 1,
  username: 'yancey',
  password: '12345',
}

type LiteUser = Omit<User, 'password'>

const checker = (username: string, password: string): LiteUser | null => {
  if (username === user.username && password === user.password) {
    const { password, ...rest } = user
    return rest
  } else {
    return null
  }
}
