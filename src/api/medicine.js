import { axiosInstance } from ".";

class MedicineAPI {
    axios = axiosInstance('medicine');

    async search(param) {
        const response = await this.axios.get('search', {
            params: {
                searchterm: param,
            }
        });
        return response;
    }
}

export const medicineAPI = new MedicineAPI();