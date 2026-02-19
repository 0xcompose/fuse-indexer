type BasicEvent = {
	chainId: number
	block: {
		number: number
		timestamp: number
	}
	logIndex: number
	srcAddress: string
}

export function getEventId(event: BasicEvent): string {
	return `${event.chainId}_${event.block.number}_${event.logIndex}`
}
