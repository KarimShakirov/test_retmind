export const baseApiURL = "https://api.opensea.io";

export const endpoints = {
  getNfts: `${baseApiURL}/api/v1/assets`,
  getNftDetails: (contract_address, token_id) =>
    `${baseApiURL}/api/v1/asset/${contract_address}/${token_id}/`,
};
