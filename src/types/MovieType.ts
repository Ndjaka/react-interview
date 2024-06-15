interface MovieType {
    id: string;
    title: string;
    category: string;
    likes: number;
    dislikes: number;
    liked?: boolean;
    disliked?: boolean;
}