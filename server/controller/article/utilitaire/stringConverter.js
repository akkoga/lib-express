export const stringConverter = (string, splitter) => {
    return string && typeof string === "string" ? string.split(splitter ? splitter : ';') : [];
}