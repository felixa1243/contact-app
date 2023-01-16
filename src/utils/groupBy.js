// export const GroupBy = (data, by) => {
//     const contactsArr = []
//     const aCode = "A".charCodeAt(0)
//     for (let i = 0; i < 26; i++) {
//         let currChar = String.fromCharCode(aCode + 1)
//         const obj = {
//             title: currChar
//         }
//         const currContact = data.filter(item => item[by].toLowerCase() === currChar)
//         if (currContact.length > 0) {
//             currContact.sort((a, b) => a[by].localeCompare(b[by]))
//             obj.data = currContact
//             contactsArr.push(obj)
//         }
//     }
//     return contactsArr
// }
export const GroupBy = (items,by)=>{
    const alphabets = [...new Set(items.map(i=>i[by].charAt(0)))].sort()
    return alphabets.map(a=>{
        return {
            title:a,
            data:items.filter(item=>item[by].charAt(0)===a)
        }
    })
}