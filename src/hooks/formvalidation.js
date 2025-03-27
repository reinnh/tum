export const Formvalidattion=()=>{
    if(!eamil) return({message:'email is required'})
    const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!emailRegex.test(email)) return({message:''})
}