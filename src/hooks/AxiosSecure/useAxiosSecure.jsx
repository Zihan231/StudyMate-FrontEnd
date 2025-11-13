import axios from "axios";
import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/Auth/AuthContext/AuthContext";

const instance = axios.create({
    baseURL: "https://study-mate-api-server.vercel.app/",
})
const useAxiosSecure = () => {
    const { user } = useContext(AuthContext);
    useEffect(() => {
        const requestInterceptor = instance.interceptors.request.use(configs => {
            configs.headers.authorization = `Bearer ${user?.accessToken}`;
            return configs;
        });
        return () => {
            instance.interceptors.request.eject(requestInterceptor);
        }
    }, [user])
    return instance;
}
export default useAxiosSecure;


