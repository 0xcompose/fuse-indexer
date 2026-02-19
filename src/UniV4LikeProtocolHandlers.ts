/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
	UniV4PoolManager_Initialize,
	PoolManager,
	CLPoolManager_Initialize,
	CLPoolManager,
	BalancerV2Vault,
} from "generated"
import { HandlerContext } from "generated/src/Types"
import { globalHandlerConfig } from "./handlerConfig"
import { getEventId } from "./eventId"

type EventWithCurrency0AndCurrency1 = {
	chainId: number
	params: {
		currency0: string
		currency1: string
	}
}

function addCurrencies0And1AndPoolTokens(
	poolId: string,
	event: EventWithCurrency0AndCurrency1,
	context: HandlerContext,
) {
	const token0Id = `${event.chainId}:${event.params.currency0}`
	const token1Id = `${event.chainId}:${event.params.currency1}`

	context.Token.set({
		id: token0Id,
		chainId: event.chainId,
		address: event.params.currency0,
	})

	context.Token.set({
		id: token1Id,
		chainId: event.chainId,
		address: event.params.currency1,
	})

	context.PoolToken.set({
		id: `${poolId}:${token0Id}:0`,
		pool_id: poolId,
		token_id: token0Id,
		tokenIndex: 0,
	})

	context.PoolToken.set({
		id: `${poolId}:${token1Id}:1`,
		pool_id: poolId,
		token_id: token1Id,
		tokenIndex: 1,
	})
}

PoolManager.Initialize.handler(async ({ event, context }) => {
	const poolId = `${event.chainId}:${event.params.id}`

	const entity: UniV4PoolManager_Initialize = {
		id: getEventId(event),
		poolId: event.params.id,
		currency0: event.params.currency0,
		currency1: event.params.currency1,
		fee: event.params.fee,
		tickSpacing: event.params.tickSpacing,
		hooks: event.params.hooks,
		sqrtPriceX96: event.params.sqrtPriceX96,
		tick: event.params.tick,
	}

	context.Pool.set({
		id: poolId,
		chainId: event.chainId,
		address: event.params.id,
		protocol: "UniswapV4",
		creatorContract: event.srcAddress,
	})

	addCurrencies0And1AndPoolTokens(poolId, event, context)

	context.UniV4PoolManager_Initialize.set(entity)
}, globalHandlerConfig)

CLPoolManager.Initialize.handler(async ({ event, context }) => {
	const poolId = `${event.chainId}:${event.params.id}`

	const entity: CLPoolManager_Initialize = {
		id: getEventId(event),
		poolId: event.params.id,
		currency0: event.params.currency0,
		currency1: event.params.currency1,
		hooks: event.params.hooks,
		fee: event.params.fee,
		parameters: event.params.parameters,
		sqrtPriceX96: event.params.sqrtPriceX96,
		tick: event.params.tick,
	}

	addCurrencies0And1AndPoolTokens(poolId, event, context)

	context.Pool.set({
		id: poolId,
		chainId: event.chainId,
		address: event.params.id,
		protocol: "PancakeSwapInfinity",
		creatorContract: event.srcAddress,
	})

	context.CLPoolManager_Initialize.set(entity)
}, globalHandlerConfig)
