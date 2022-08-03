export const updateDetails = (content) => {
    return {
        type: "details",
        payload: content
    }
}

export const updateQueueStatus = (content) => {
    return {
        type: "queue status",
        payload: content
    }
}