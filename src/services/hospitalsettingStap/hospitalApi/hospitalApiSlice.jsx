import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'
import apiInstance from "../../../Api/axios";


//#######################################  Hospital ###########################################

export const CreateHopital = createAsyncThunk("CreateHopital", async (params, { dispatch, getState }) => {
    const user=localStorage.getItem("user")
    let result = await apiInstance.post(`/hospital/create?username=${user}`,params).then(function (response) {
        if(response?.status >= 200 && response?.status < 300){
            toast.success("Hospital Created Hospital");
        }
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});


//#######################################  Staff ###########################################

export const CreateStaff = createAsyncThunk("CreateStaff", async (params, { dispatch, getState }) => {
    const user=localStorage.getItem("user")
    let result = await apiInstance.post(`/staff/create?username=${user}`,params).then(function (response) {
        console.log("hospital created",response)
        if(response?.status >= 200 && response?.status < 300){
            toast.success("Staff Addeded");
        }
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

export const GetStaff = createAsyncThunk("GetStaff", async (params, { dispatch, getState }) => {
    const user=localStorage.getItem("user")
    console.log("params",user)
    let result = await apiInstance.get(`/staff/all?username=${user}&page=1&size=100&searchQuery`,).then(function (response) {
        console.log("All Data",response)
        // if(response?.status >= 200 && response?.status < 300){
           
        // }
        return response
    }).catch(function (error) {
        toast.error("some thing went wrong get Staff");
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});