 export interface Posts {
    id: number
    author: {
        image: string,
        username: string
    }
    imageUrl: string
    caption: string
    isLiked: boolean
    likes: number
  }