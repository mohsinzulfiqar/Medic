import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/login/authSlice'
import hospitalSlice from "../src/services/hospitalsettingStap/hospitalApi/hospitalSlice"
const store = configureStore({
  reducer: {
    auth: authReducer,
    hospital: hospitalSlice

  }
})
export default store