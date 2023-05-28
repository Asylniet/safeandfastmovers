import { useGetServices } from "../../hooks/useGetServices";
import { Service } from "./Service";
// import { GetServices } from "./GetServices";
import { useEffect, useState } from "react";

export const ServiceList = () => {
    const { services } = useGetServices();
    const [search, setSearch] = useState('');
    const [filteredServices, setFilteredServices] = useState();
    useEffect(() => {
        if(services.status !== "pending" && services.value.length > 0) {
            setFilteredServices(
                services.value.filter(
                    (service) => {
                        return service.title.toLowerCase().includes(search.toLowerCase()) ||
                        service.descr.toLowerCase().includes(search.toLowerCase())
                    }
                )
            )
        }
    }, [search, services]);

    return (
        <section class="section service-2">
            <div class="container">
                <div class="row">
                    {/* <GetServices /> */}
                    <div class="input-group mb-3">
                        <input 
                            type="search" 
                            class="form-control" 
                            placeholder="Search services" 
                            aria-label="Services" 
                            aria-describedby="basic-addon2"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button">Button</button>
                        </div>
                    </div>
                    {services.status !== 'loading' && filteredServices && filteredServices.map((service) => (
                        <Service key={service.id} img={service.img} title={service.title} descr={service.descr} />
                    ))}
                    {services.value && services.value.length > 0 && filteredServices && filteredServices.length < 1 && (
                        <div className="d-flex w-100 py-5 justify-content-center">
                            Nothing found
                        </div>
                    )}
                    {services.status === 'loading' && (
                        <div className="d-flex w-100 py-5 justify-content-center">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}