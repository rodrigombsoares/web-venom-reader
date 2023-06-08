const matterRemover = /---(.|\n)*?---/

export function removeMatter(text) {
    return text.replace(matterRemover,"")
}