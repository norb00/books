export interface Book {
    id: string,
    volumeInfo: {
        title: string,
        subtitle?: string,
        authors?: Array<any>,
        imageLinks?: {
            thumbnail?: string,
            large?: string
        }
    }
}

export interface BookList extends Array<Book> {}