import axios from "axios";
import { endpoints } from "./endpoints";

const axiosInstance = axios.create({
  headers: {
    "content-type": "application/json",
  },
});

export const getNfts = () => {
  const url = endpoints.getNfts;

  return axiosInstance.get(url);
};

export const getNftDetails = (contract_address, token_id) => {
  const url = endpoints.getNftDetails(contract_address, token_id);

  return axiosInstance.get(url);
};
