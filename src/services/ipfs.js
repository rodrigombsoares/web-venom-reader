const ipfsGateway = 'https://gateway.pinata.cloud/ipfs/'

export function fetchFromIPFS(hash) {
    return fetch(ipfsGateway+hash)
}

export function getImageURL(hash) {
    return ipfsGateway+hash
}