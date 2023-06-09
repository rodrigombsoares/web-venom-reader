const matterRemover = /---(.|\n)*?---/

export function removeMatter(text) {
    return text.replace(matterRemover,"")
}

export function hasMatter(text) {
    return matterRemover.test(text)
}