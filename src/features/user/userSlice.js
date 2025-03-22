import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const registerUser = createAsyncThunk("user/registerUser",
    async ({ email, name, password, navigate }, { rejectWithValue }) => {
        try {
            const res = await api.post("/user", { email, name, password });
            // console.log(res);
            navigate("/login"); // 회원가입 후 로그인 페이지로 이동
            return res.data.data;
        } catch (error) {
            return rejectWithValue(error.error);
        }
    }
);

export const loginWithEmail = createAsyncThunk("user/loginWithEmail",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const res = await api.post("/user/login", { email, password });
            // console.log("login", res);
            
            // 백엔드에서 받은 토큰을 세션스토리지에 저장
            sessionStorage.setItem("token", res.data.token);
            
            return res.data; // ✅ 로그인된 유저 정보 반환
        } catch (error) {
            return rejectWithValue(error.error);
        }
    }
);
// 어디든지 토큰값은 체크 해야하니까 (로그인 유지 => applayout)
export const loginWithToken = createAsyncThunk("user/loginWithToken",
    async (_,{rejectWithValue})=>{
        try{
            const res = await api.get("/user/myaccount")
            // console.log("tokkken",res)
            return res.data
            
        }
        catch(error){
            return rejectWithValue(error.error)
        }
    }
);

export const logoutUser = ()=>(dispatch)=>{
    sessionStorage.removeItem("token")
    dispatch(logout())
}

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: false,
        loginError: null,
        success: false
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        logout : (state)=>{
            state.user = null 
        }
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginWithEmail.pending, (state) => {
                state.loading = true;
                state.loginError = null;
            })
            .addCase(loginWithEmail.fulfilled, (state, action) => {
                state.user = action.payload.user; // ✅ 로그인 후 유저 상태 업데이트
                state.loading = false;
                state.loginError = null;
            })
         
            .addCase(loginWithEmail.rejected, (state, action) => {
                state.loading = false;
                state.loginError = action.payload; // ✅ 로그인 실패 시 오류 메시지 저장
            })

    
            .addCase(loginWithToken.fulfilled, (state, action) => {
                state.user = action.payload.user; // ✅ 로그인 후 유저 상태 업데이트
            })

    }
});

export const { setUser,logout } = userSlice.actions;
export default userSlice.reducer;
