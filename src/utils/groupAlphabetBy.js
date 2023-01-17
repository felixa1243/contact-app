export const groupAlphabetBy = (items, by) => {
    const alphabets = [...new Set(items.map(i => i[by].charAt(0)))].sort()
    return alphabets.map(alphabet => {
        return {
            title: alphabet,
            data: items.filter(item => item[by].charAt(0) === alphabet)
        }
    })
}