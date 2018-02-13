export interface Book {
    id: string,
    volumeInfo: {
        authors: Array<any>,
        imageLinks: {
            thumbnail: string
        },
        title: string,
        subtitle: string
    }
}