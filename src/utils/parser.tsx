export const parserDate = (date: string | undefined) :string =>{
    if(!date){
        return ""
    }
    const dateObj = new Date(date)
    return `${dateObj.getDay()}/${dateObj.getMonth()+1}/${dateObj.getFullYear()}`
}

export const parserDateWithHours = (date: string | undefined) :string =>{
    if(!date){
        return ""
    }
    const dateObj = new Date(date)
    return `${dateObj.getHours()}:${dateObj.getMinutes()>9 ? dateObj.getMinutes(): "0"+dateObj.getMinutes()} - ${dateObj.getDay()}/${dateObj.getMonth()+1}/${dateObj.getFullYear()}`
}