export type TokenId = `${number}:${string}`

export function getTokenId(chainId: number, address: string): TokenId {
	return `${chainId}:${address}`
}
