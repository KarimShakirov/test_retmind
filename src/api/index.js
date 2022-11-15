import axios from "axios";
import { endpoints } from "./endpoints";

const axiosInstance = axios.create({
  headers: {
    "content-type": "application/json",
  },
});

export const getNft = async () => {
  const url = endpoints.getNft;

  const response = await axiosInstance.get(url);
  return response.data;
};

export const getNftDetails = (contract_address, token_id) => {
  const url = endpoints.getNftDetails(contract_address, token_id);

  return axiosInstance.get(url);
};

export const getNftOffset = async (limit, offset) => {
  const url = endpoints.getNftOffset(limit, offset)

  const response = await axiosInstance.get(url)
  return response.data;
}
