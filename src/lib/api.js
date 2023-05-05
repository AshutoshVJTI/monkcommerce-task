import axios from "axios";

export const fetchData = async (search, page) => {
    const response = await axios.get(
        `https://stageapibc.monkcommerce.app/admin/shop/product?search=${search}&page=${page}`
    );
    return response?.data ?? [];
};