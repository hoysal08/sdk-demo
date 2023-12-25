import { Base } from "../base";
import { NewPost, Post } from "./types";

const resource = 'posts'
export class Posts extends Base {
    getPostById(id: number): Promise<Post> {
        return this.invoke<Post>(`/${resource}/${id}`);
    }

    getPosts(): Promise<Post[]> {
        return this.invoke<Post[]>(`/${resource}`);
    }

    createPost(newPost: NewPost): Promise<Post> {
        return this.invoke<Post>(`/${resource}`, {
            method: 'POST',
            body: JSON.stringify(newPost)
        })
    }
}