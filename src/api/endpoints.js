export const baseApiURL = "https://api.opensea.io";

export const endpoints = {
    getNft: `${baseApiURL}/api/v1/assets`,
    getNftDetails: (contract_address, token_id) =>
        `${baseApiURL}/api/v1/asset/${contract_address}/${token_id}/`,
    getNftOffset: (offset, limit = 20) =>
        `${baseApiURL}/api/v1/bundles?limit=${limit}&offset=${offset}`,
};
