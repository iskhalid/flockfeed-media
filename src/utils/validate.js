
export const formValidate = (...all) => {
    // console.log(all);
    const[password,fullName] = all
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if(fullName){
        const isFullName = /^[A-Za-z ]+$/.test(fullName)
        if(!isFullName) return "Enter a valid name"
        if(!isPasswordValid) return "Password length must be atleast 8 and should contain one uppercase, lowercase, number and symbol."

    }
    if(!isPasswordValid) return "Password is not valid"

    return null


}