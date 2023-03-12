import axios from "axios";

const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const fetchDictionary = async (query) => {
    const { data } = await axios.get(URL + query);
    return data;
};
