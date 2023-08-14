
const BASE_PATH= process.env.NODE_ENV === "production" ? "https://port-0-yj-react-project4-back-3prof2lll098hrb.sel4.cloudtype.app" : "http://localhost:8080";
export async function rentalNotice(){
    return await fetch(`${BASE_PATH}/api/rental/notice`, {
        method: "GET",
        headers:{
            "Content-Type" : "application/json",
        },
        credentials: "include",
    }).then((res)=>res.json());
}

export async function rentalNoticeDetail(props){
    console.log(props)
    const id = props.queryKey[1];
    return await fetch (`${BASE_PATH}/api/rental/notice-detail/${id}`, {
        method: "GET",
        headers:{
            "Content-Type" : "application/json",
        },
        credentials: "include",
    }).then((res)=>res.json());
}

export async function rentalNoticeWrite(props){
    console.log(props);
    return await fetch (`${BASE_PATH}/api/rental/notice-write`, {
        method:"POST",
        headers:{
            "Content-Type" : "application/json",
        },
        credentials: "include",
        body: JSON.stringify(props),
    }).then((res)=>res.json());
}

export async function userRegister(props){
    return await fetch (`${BASE_PATH}/api/user/register`, {
        method:"POST",
        headers:{
            "Content-Type" : "application/json",
        },
        credentials: "include",
        body: JSON.stringify(props),
    }).then((res)=>res.json());
    
}

export async function userSignIn(props){
    console.log(props);
    return await fetch (`${BASE_PATH}/api/user/signin`, {
        method:"POST",
        headers:{
            "Content-Type" : "application/json",
        },
        credentials: "include",
        body: JSON.stringify(props),
    }).then((res)=>res.json());
    
}

export async function loginSuccess(){
    return await fetch(`${BASE_PATH}/api/user/login/success`,{
        method:"GET",
        headers:{
            "Content-Type" : "application/json",
        },
        credentials: "include",
    }).then((res)=>res.json());
}