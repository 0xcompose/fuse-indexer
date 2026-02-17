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
	Pool,
	UniV4PoolManager_Initialize,
	PoolManager,
	CLPoolManager_Initialize,
	CLPoolManager,
} from "generated"

const handlerConfig = {
	wildcard: true,
}

AlgebraIntegral.CustomPool.handler(async ({ event, context }) => {
	const entity: AlgebraIntegral_CustomPool = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		deployer: event.params.deployer,
		token0: event.params.token0,
		token1: event.params.token1,
		pool: event.params.pool,
	}

	const pool: Pool = {
		id: `${event.chainId}:${event.params.pool}`,
		token0: event.params.token0,
		token1: event.params.token1,
		address: event.params.pool,
		factory: "AlgebraIntegral",
	}

	context.Pool.set(pool)

	context.AlgebraIntegral_CustomPool.set(entity)
}, handlerConfig)

AlgebraIntegral.Pool.handler(async ({ event, context }) => {
	const entity: AlgebraIntegral_Pool = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		token0: event.params.token0,
		token1: event.params.token1,
		pool: event.params.pool,
	}

	const pool: Pool = {
		id: `${event.chainId}:${event.params.pool}`,
		token0: event.params.token0,
		token1: event.params.token1,
		address: event.params.pool,
		factory: "AlgebraIntegral",
	}

	context.Pool.set(pool)

	context.AlgebraIntegral_Pool.set(entity)
}, handlerConfig)

UniswapV2Factory.PairCreated.handler(async ({ event, context }) => {
	const entity: UniswapV2Factory_PairCreated = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		token0: event.params.token0,
		token1: event.params.token1,
		pair: event.params.pair,
		_3: event.params._3,
	}

	const pool: Pool = {
		id: `${event.chainId}:${event.params.pair}`,
		token0: event.params.token0,
		token1: event.params.token1,
		address: event.params.pair,
		factory: "UniswapV2",
	}

	context.Pool.set(pool)

	context.UniswapV2Factory_PairCreated.set(entity)
}, handlerConfig)

UniswapV3Factory.PoolCreated.handler(async ({ event, context }) => {
	const entity: UniswapV3Factory_PoolCreated = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		token0: event.params.token0,
		token1: event.params.token1,
		fee: event.params.fee,
		tickSpacing: event.params.tickSpacing,
		pool: event.params.pool,
	}

	const pool: Pool = {
		id: `${event.chainId}:${event.params.pool}`,
		token0: event.params.token0,
		token1: event.params.token1,
		address: event.params.pool,
		factory: "UniswapV3",
	}

	context.Pool.set(pool)

	context.UniswapV3Factory_PoolCreated.set(entity)
}, handlerConfig)

PoolManager.Initialize.handler(async ({ event, context }) => {
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

	const pool: Pool = {
		id: `${event.chainId}:${event.params.id}`,
		token0: event.params.currency0,
		token1: event.params.currency1,
		address: event.params.id,
		factory: "UniswapV4_PoolManager",
	}

	context.Pool.set(pool)

	context.UniV4PoolManager_Initialize.set(entity)
}, handlerConfig)

CLPoolManager.Initialize.handler(async ({ event, context }) => {
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

	const pool: Pool = {
		id: `${event.chainId}:${event.params.id}`,
		token0: event.params.currency0,
		token1: event.params.currency1,
		address: event.params.id,
		factory: "PancakeSwapInfinity_CLPoolManager",
	}

	context.Pool.set(pool)

	context.CLPoolManager_Initialize.set(entity)
}, handlerConfig)
