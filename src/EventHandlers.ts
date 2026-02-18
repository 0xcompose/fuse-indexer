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
	UniV4PoolManager_Initialize,
	PoolManager,
	CLPoolManager_Initialize,
	CLPoolManager,
	DexProtocol,
} from "generated"

const handlerConfig = {
	wildcard: true,
}

AlgebraIntegral.CustomPool.handler(async ({ event, context }) => {
	const poolId = `${event.chainId}:${event.params.pool}`
	const token0Id = `${event.chainId}:${event.params.token0}`
	const token1Id = `${event.chainId}:${event.params.token1}`

	const entity: AlgebraIntegral_CustomPool = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		deployer: event.params.deployer,
		token0: event.params.token0,
		token1: event.params.token1,
		pool: event.params.pool,
	}

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

	context.Pool.set({
		id: poolId,
		chainId: event.chainId,
		address: event.params.pool,
		protocol: "AlgebraIntegral",
		creatorContract: event.srcAddress,
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

	context.AlgebraIntegral_CustomPool.set(entity)
}, handlerConfig)

AlgebraIntegral.Pool.handler(async ({ event, context }) => {
	const poolId = `${event.chainId}:${event.params.pool}`
	const token0Id = `${event.chainId}:${event.params.token0}`
	const token1Id = `${event.chainId}:${event.params.token1}`

	const entity: AlgebraIntegral_Pool = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		token0: event.params.token0,
		token1: event.params.token1,
		pool: event.params.pool,
	}

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

	context.Pool.set({
		id: poolId,
		chainId: event.chainId,
		address: event.params.pool,
		protocol: "AlgebraIntegral",
		creatorContract: event.srcAddress,
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

	context.AlgebraIntegral_Pool.set(entity)
}, handlerConfig)

UniswapV2Factory.PairCreated.handler(async ({ event, context }) => {
	const poolId = `${event.chainId}:${event.params.pair}`
	const token0Id = `${event.chainId}:${event.params.token0}`
	const token1Id = `${event.chainId}:${event.params.token1}`

	const entity: UniswapV2Factory_PairCreated = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		token0: event.params.token0,
		token1: event.params.token1,
		pair: event.params.pair,
		_3: event.params._3,
	}

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

	context.Pool.set({
		id: poolId,
		chainId: event.chainId,
		address: event.params.pair,
		protocol: "UniswapV2",
		creatorContract: event.srcAddress,
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

	context.UniswapV2Factory_PairCreated.set(entity)
}, handlerConfig)

UniswapV3Factory.PoolCreated.handler(async ({ event, context }) => {
	const poolId = `${event.chainId}:${event.params.pool}`
	const token0Id = `${event.chainId}:${event.params.token0}`
	const token1Id = `${event.chainId}:${event.params.token1}`

	const entity: UniswapV3Factory_PoolCreated = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		token0: event.params.token0,
		token1: event.params.token1,
		fee: event.params.fee,
		tickSpacing: event.params.tickSpacing,
		pool: event.params.pool,
	}

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

	context.Pool.set({
		id: poolId,
		chainId: event.chainId,
		address: event.params.pool,
		protocol: "UniswapV3",
		creatorContract: event.srcAddress,
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

	context.UniswapV3Factory_PoolCreated.set(entity)
}, handlerConfig)

PoolManager.Initialize.handler(async ({ event, context }) => {
	const poolId = `${event.chainId}:${event.params.id}`
	const token0Id = `${event.chainId}:${event.params.currency0}`
	const token1Id = `${event.chainId}:${event.params.currency1}`

	const entity: UniV4PoolManager_Initialize = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		poolId: event.params.id,
		currency0: event.params.currency0,
		currency1: event.params.currency1,
		fee: event.params.fee,
		tickSpacing: event.params.tickSpacing,
		hooks: event.params.hooks,
		sqrtPriceX96: event.params.sqrtPriceX96,
		tick: event.params.tick,
	}

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

	context.Pool.set({
		id: poolId,
		chainId: event.chainId,
		address: event.params.id,
		protocol: "UniswapV4",
		creatorContract: event.srcAddress,
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

	context.UniV4PoolManager_Initialize.set(entity)
}, handlerConfig)

CLPoolManager.Initialize.handler(async ({ event, context }) => {
	const poolId = `${event.chainId}:${event.params.id}`
	const token0Id = `${event.chainId}:${event.params.currency0}`
	const token1Id = `${event.chainId}:${event.params.currency1}`

	const entity: CLPoolManager_Initialize = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		poolId: event.params.id,
		currency0: event.params.currency0,
		currency1: event.params.currency1,
		hooks: event.params.hooks,
		fee: event.params.fee,
		parameters: event.params.parameters,
		sqrtPriceX96: event.params.sqrtPriceX96,
		tick: event.params.tick,
	}

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

	context.Pool.set({
		id: poolId,
		chainId: event.chainId,
		address: event.params.id,
		protocol: "PancakeSwapInfinity",
		creatorContract: event.srcAddress,
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

	context.CLPoolManager_Initialize.set(entity)
}, handlerConfig)
