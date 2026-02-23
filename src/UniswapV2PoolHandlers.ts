import {
	UniswapV2Pair,
	UniswapV2Pool_Burn,
	UniswapV2Pool_Mint,
	UniswapV2Pool_Swap,
	UniswapV2Pool_Sync,
} from "generated"
import { getEventId } from "./eventId"
import { globalHandlerConfig } from "./handlerConfig"

UniswapV2Pair.Swap.handler(async ({ event, context }) => {
	const entity: UniswapV2Pool_Swap = {
		id: getEventId(event),
		pool: event.srcAddress,
		sender: event.params.sender,
		amount0In: event.params.amount0In,
		amount1In: event.params.amount1In,
		amount0Out: event.params.amount0Out,
		amount1Out: event.params.amount1Out,
		to: event.params.to,
		createdAt: event.block.timestamp,
		createdAtBlock: event.block.number,
	}

	context.UniswapV2Pool_Swap.set(entity)
})

UniswapV2Pair.Mint.handler(async ({ event, context }) => {
	const entity: UniswapV2Pool_Mint = {
		id: getEventId(event),
		pool: event.srcAddress,
		sender: event.params.sender,
		amount0: event.params.amount0,
		amount1: event.params.amount1,
		createdAt: event.block.timestamp,
		createdAtBlock: event.block.number,
	}

	context.UniswapV2Pool_Mint.set(entity)
})

UniswapV2Pair.Burn.handler(async ({ event, context }) => {
	const entity: UniswapV2Pool_Burn = {
		id: getEventId(event),
		pool: event.srcAddress,
		sender: event.params.sender,
		amount0: event.params.amount0,
		amount1: event.params.amount1,
		to: event.params.to,
		createdAt: event.block.timestamp,
		createdAtBlock: event.block.number,
	}

	context.UniswapV2Pool_Burn.set(entity)
})

UniswapV2Pair.Sync.handler(async ({ event, context }) => {
	const entity: UniswapV2Pool_Sync = {
		id: getEventId(event),
		pool: event.srcAddress,
		reserve0: event.params.reserve0,
		reserve1: event.params.reserve1,
		createdAt: event.block.timestamp,
		createdAtBlock: event.block.number,
	}

	const latestReservesId = `${event.chainId}:${event.srcAddress}`

	context.UniswapV2Pool_LatestReserves.set({
		id: latestReservesId,
		pool: event.srcAddress,
		reserve0: event.params.reserve0,
		reserve1: event.params.reserve1,
		updatedAt: event.block.timestamp,
		updatedAtBlock: event.block.number,
	})

	context.UniswapV2Pool_Sync.set(entity)
})
