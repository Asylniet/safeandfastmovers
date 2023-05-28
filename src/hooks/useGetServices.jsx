import { useSelector, useDispatch } from "react-redux";
import { fetchServices } from "../store/services/slice";
import { useEffect } from "react";

export const useGetServices = () => {
    const dispatch = useDispatch();
    const services = useSelector((state) => state.services);

    useEffect(() => {
        dispatch(fetchServices());
    }, [])

    return { services };
}