import {http} from "@/services/config";

const header = {
    headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYWZlYmJlYjU2ODdmOTQ3NDM5MWExNDM4MzM5MzlkYzFmNzU2MjhiN2ZiOWZhMjUzNjE4MTIzN2FlODk5MWE3ZDgzYzljOTkzYjQyMmNiZGQiLCJpYXQiOjE2NTQ0MDAwNzIuMTI2NDU0LCJuYmYiOjE2NTQ0MDAwNzIuMTI2NDU2LCJleHAiOjE2ODU5MzYwNzIuMDQwODMxLCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.wrUZcB-vgLxmDKt81mGhFExWN8ytwptiNL9TemHsNXKg4RGcirX-O5ivNJPJz6Gou8gGjEIMRu2ydXPVRdwFB2nmk38pMlWRyKXzTLeDBPVO9_IZfGupbU36XBaYkEV_iIT4zYpT5zsF89egJzfQ9Fd3L11JCOgKX5HFJlc5RTmJaYCipvzdqiengZ0vLvIEOaxavTsa8LgZmR0gSnrrtTkEkRWArrx1dG-kAM1jw6-EtZCHdLgUzJ3EA75outaftfx7XqbtJm619v9koZ9tMyWfYpSIulf_ROAb2cSit9VBCV5fQVCMWq1lZ-78eWGeHlpvMwLbEQ7O4_Wu_KF5iQfcabPm67H52B_aOl_FbX_WM8y4w9MVFzHG-g-NLDWJaVX2c9ad9RKQTc-EWGV83TY7qr-jHZS2JrscY-EJWxnzTdZTr_bUGzr2GtcvYw6h7N1xNrj4D7ChvnrBnxHHvmTJ_NFLvKEirMbyke5IxNTLsiQXwwyWzUKN4Uefg2pGLiv2hMjRRkkdc6YIxH-AqTwev8gQbvLFqDp918wCR8kNG6DVYVBUvsu547x5QTp5PvV4eDRHoRGhYPwOHQYhxbxLe9nhUD-UeVawynanNXrjkLfyI8TFj_KbLCee2mWr1lvVBh6seTFG8RS9Ss2IcGRDkIsls59xlr3m6BoA418` }
};
export default {

    novaTask: (task: any) => {
        return http.post('/api/task',task,header)
    },

    listarTask: () => {
        return http.get('/api/task',header)
    },

    deletarTask: (id:bigint) => {
        return http.delete('/api/task/'+id,header);
    }

}