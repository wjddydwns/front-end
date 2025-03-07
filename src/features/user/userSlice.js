import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../utils/api'
const userSlice = createSlice({
    name : "user",
    initialState:{
        user:null,
        loading : false,
        loginError : null,
        success: false
    }
})

export const registerUser = createAsyncThunk ("user/registerUser",
    async ({email,name,password,navigate})=>{
        try{
            const res = await api.post("/user",{email,name,password})
            
            console.log(res)
            navigate("/")
            return res.data.data
        }
        catch(error){
            alert(error.error)
        }
    }
)
export default userSlice.reducer