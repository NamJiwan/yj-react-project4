
const BASE_PATH=  "http://localhost:8080";
export async function rentalNotice(){
    return await fetch(`${BASE_PATH}/api/rental/notice`, {
        method: "GET",
        headers:{
            "Content-Tpye" : "application/json",
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
            "Content-Tpye" : "application/json",
        },
        credentials: "include",
    }).then((res)=>res.json());
}