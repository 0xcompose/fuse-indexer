/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
	AlgebraIntegral,
	AlgebraIntegral_CustomPool,
	AlgebraIntegral_Pool,
	UniswapV2Factory,
	UniswapV2Factory_PairCreated,
	UniswapV3Factory,
	UniswapV3Factory_PoolCreated,
} from "generated"
import { HandlerContext } from "generated/src/Types"
import { globalHandlerConfig } from "./handlerConfig"
import { getEventId } from "./eventId"

type EventWithToken0AndToken1 = {
	chainId: number
	params: {
		token0: string
		token1: string
	}
}

function addTokens0And1AndPoolTokens(
	poolId: string,
	event: EventWithToken0AndToken1,
	context: HandlerContext,
) {
	const token0Id = `${event.chainId}:${event.params.token0}`
	const token1Id = `${event.chainId}:${event.params.token1}`

	context.Token.set({
		id: token0Id,
		chainId: event.chainId,
		address: event.params.token0,
	})

	context.Token.set({
		id: token1Id,
		chainId: event.chainId,
		address: event.params.token1,
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

AlgebraIntegral.CustomPool.handler(async ({ event, context }) => {
	const poolId = `${event.chainId}:${event.params.pool}`

	const entity: AlgebraIntegral_CustomPool = {
		id: getEventId(event),
		deployer: event.params.deployer,
		token0: event.params.token0,
		token1: event.params.token1,
		pool: event.params.pool,
	}

	addTokens0And1AndPoolTokens(poolId, event, context)

	context.Pool.set({
		id: poolId,
		chainId: event.chainId,
		address: event.params.pool,
		protocol: "AlgebraIntegral",
		creatorContract: event.srcAddress,
	})

	context.AlgebraIntegral_CustomPool.set(entity)
}, globalHandlerConfig)

AlgebraIntegral.Pool.handler(async ({ event, context }) => {
	const poolId = `${event.chainId}:${event.params.pool}`

	const entity: AlgebraIntegral_Pool = {
		id: getEventId(event),
		token0: event.params.token0,
		token1: event.params.token1,
		pool: event.params.pool,
	}

	addTokens0And1AndPoolTokens(poolId, event, context)

	context.Pool.set({
		id: poolId,
		chainId: event.chainId,
		address: event.params.pool,
		protocol: "AlgebraIntegral",
		creatorContract: event.srcAddress,
	})

	context.AlgebraIntegral_Pool.set(entity)
}, globalHandlerConfig)

UniswapV2Factory.PairCreated.handler(async ({ event, context }) => {
	const poolId = `${event.chainId}:${event.params.pair}`

	const entity: UniswapV2Factory_PairCreated = {
		id: getEventId(event),
		token0: event.params.token0,
		token1: event.params.token1,
		pair: event.params.pair,
		_3: event.params._3,
	}

	addTokens0And1AndPoolTokens(poolId, event, context)

	context.Pool.set({
		id: poolId,
		chainId: event.chainId,
		address: event.params.pair,
		protocol: "UniswapV2",
		creatorContract: event.srcAddress,
	})

	context.UniswapV2Factory_PairCreated.set(entity)
}, globalHandlerConfig)

UniswapV3Factory.PoolCreated.handler(async ({ event, context }) => {
	const poolId = `${event.chainId}:${event.params.pool}`

	const entity: UniswapV3Factory_PoolCreated = {
		id: getEventId(event),
		token0: event.params.token0,
		token1: event.params.token1,
		fee: event.params.fee,
		tickSpacing: event.params.tickSpacing,
		pool: event.params.pool,
	}

	addTokens0And1AndPoolTokens(poolId, event, context)

	context.Pool.set({
		id: poolId,
		chainId: event.chainId,
		address: event.params.pool,
		protocol: "UniswapV3",
		creatorContract: event.srcAddress,
	})

	context.UniswapV3Factory_PoolCreated.set(entity)
}, globalHandlerConfig)
