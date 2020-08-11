export interface CommentItem {
    id: string;
    content: string;
    depth: 0 | 1 | 2;
}

export interface ItemConfig {
    replyable: boolean;
    whistleBlow: boolean;
    foldable: boolean;
}