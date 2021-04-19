
export const toShortDate = (date) => {
    var d = new Date(date)
    let month = d.getMonth();
    month = (month + 1).toString();
    let year = d.getFullYear().toString().substr(-2);
    return `${month}/${year}`
}


export  const dateCompare = (a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
}