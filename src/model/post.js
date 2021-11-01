class Post {
    #no
    #title
    #writer
    #createdAt

    constructor(no, title, writer, createdAt) {
        this.#no = no;
        this.#title = title;
        this.#writer = writer;
        this.#createdAt = createdAt;
    }


    get no() {
        return this.#no;
    }

    get title() {
        return this.#title;
    }

    get writer() {
        return this.#writer;
    }

    get createdAt() {
        return this.#createdAt;
    }
}

export default Post;