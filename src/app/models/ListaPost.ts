
  export interface Post {
    id: number
    title: string
    body: string
    userId: number
    date: number
    category: string
  }
  
  export interface PostCategory {
    id: string
    title: string
  }