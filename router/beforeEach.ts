export default async (to: any,from: any,next: any) => {

    if(to.name !== "login" && to.name !== "register" && !localStorage.getItem('token'))  {
        alert()
        next({name: 'login'})
    }else{
        next()
    }

}