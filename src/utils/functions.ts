export const convertTextPascal=(text:string):string=>{
    return text.split(" ").map(word=>word[0].toUpperCase()+word.slice(1)).join(" ")
}
export const isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'