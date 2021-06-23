export interface authors {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    birthdate: string;
    added: string;
}

export interface posts {
    id: number;
    author_id: authors['id'];
    title: string;
    description: string;
    content: string;
    date: string;
}