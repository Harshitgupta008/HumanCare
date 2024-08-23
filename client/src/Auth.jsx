import { createContext, useContext, useEffect, useState } from "react";

export const AuthProvider = createContext();

export const AuthToken = ({ children })=>{
    const [docToken, setDoctorToken] = useState(localStorage.getItem("doctorToken"))
    const [patToken, setPatientToken] = useState(localStorage.getItem("patientToken"))

    const loggedDoctor = !!docToken;
    const loggedpatient = !!patToken;
    useEffect(()=>{

    },[loggedDoctor, loggedpatient])
    return <AuthProvider.Provider value={{ loggedDoctor, loggedpatient }}>
        { children }
    </AuthProvider.Provider>
}

export const Useauth = () => {
    return useContext(AuthProvider);
}