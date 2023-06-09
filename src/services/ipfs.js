const ipfsGateway = 'https://ipfs.io/ipfs/'

export function fetchFromIPFS(hash) {
    return fetch(ipfsGateway+hash)
}