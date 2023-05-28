import { Get } from "react-axios"
import { Service } from "./Service"

export const GetServices = () => {
    return (
            <Get url="/api/services">
                {(error, response, isLoading, makeRequest, axios) => {
                    if(error) {
                        return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
                    }
                    else if(isLoading) {
                        return (<div>Loading...</div>)
                    }
                    else if(response !== null) {
                        return (
                            response.data.map((service) => (
                                <Service img={service.img} title={service.title} descr={service.descr} />
                            ))
                        )
                    }
                    return (<div>Default message before request is made.</div>)
                }}
            </Get>
    )
}