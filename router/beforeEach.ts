export default async (to: any,from: any,next: any) => {

    if(to.name !== "login" && to.name !== "register" && !localStorage.getItem('token'))  {

        next({name: 'login'})
    }else{
        next()
    }

}