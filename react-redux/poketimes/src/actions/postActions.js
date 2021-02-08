export const deletePost = (id) => {
    return {
        type: "DELETE_POST",
        id
    }
}

export const createPost = (post) => {
    return {
        type: "CREATE_POST",
        post
    }
}

export const toggleLike = (id) => {
    return {
        type: "TOGGLE_LIKE",
        id
    }
}

export const addNewComment = (comment) => {
    return {
        type: "ADD_NEW_COMMENT",
        newComment: comment
    }
}