import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { searchMedicine } from "../../store/medicine/slice";

export const Search = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if(search.length > 3) {
                dispatch(searchMedicine(search.toLowerCase()));
            }
        }, 500);
        return () => clearTimeout(delayDebounceFn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    return (
        <div class="input-group mb-3">
            <input 
                type="search" 
                class="form-control" 
                placeholder="Search medicals" 
                aria-label="Search medicals" 
                aria-describedby="basic-addon2" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" onClick={() => setSearch('')}>Clear</button>
            </div>
        </div>
    )
}