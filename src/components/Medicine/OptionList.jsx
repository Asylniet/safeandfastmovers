import { useSelector } from "react-redux"
import { Loader } from "../Loader";
import { Option } from "./Option";
import { Stack } from "react-bootstrap";

export const OptionList = () => {
    const medicine = useSelector((state) => state.medicine);
    return (
        <Stack direction="vertical" gap={1}>
            {medicine.searchStatus === 'loading' && (
                <Loader />
            )}
            {medicine.searchStatus === 'idle' && medicine.searchValue.message === 'Success' && (
                medicine.searchValue.data.medicines.map((medical) => (
                    <Option medical={medical} />
                ))
            )}
            {medicine.searchValue && medicine.searchValue.message === 'Success' && medicine.searchValue.data.medicines && medicine.searchValue.data.medicines.length < 1 && (
                <div>
                    Nothing found
                </div>
            )}
        </Stack>
    )
}