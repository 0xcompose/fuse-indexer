/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
	AlgebraIntegral,
	AlgebraIntegral_CustomPool,
	AlgebraIntegral_DefaultCommunityFee,
	AlgebraIntegral_DefaultFee,
	AlgebraIntegral_DefaultPluginFactory,
	AlgebraIntegral_DefaultTickspacing,
	AlgebraIntegral_OwnershipTransferStarted,
	AlgebraIntegral_OwnershipTransferred,
	AlgebraIntegral_Pool,
	AlgebraIntegral_RenounceOwnershipFinish,
	AlgebraIntegral_RenounceOwnershipStart,
	AlgebraIntegral_RenounceOwnershipStop,
	AlgebraIntegral_RoleAdminChanged,
	AlgebraIntegral_RoleGranted,
	AlgebraIntegral_RoleRevoked,
	AlgebraIntegral_VaultFactory,
	UniswapV2Factory,
	UniswapV2Factory_PairCreated,
	VoltageV3Factory,
	VoltageV3Factory_FeeAmountEnabled,
	VoltageV3Factory_FeeAmountExtraInfoUpdated,
	VoltageV3Factory_OwnerChanged,
	VoltageV3Factory_PoolCreated,
	VoltageV3Factory_SetLmPoolDeployer,
	VoltageV3Factory_WhiteListAdded,
	Pool,
} from "generated"

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
})

AlgebraIntegral.DefaultCommunityFee.handler(async ({ event, context }) => {
	const entity: AlgebraIntegral_DefaultCommunityFee = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		newDefaultCommunityFee: event.params.newDefaultCommunityFee,
	}

	context.AlgebraIntegral_DefaultCommunityFee.set(entity)
})

AlgebraIntegral.DefaultFee.handler(async ({ event, context }) => {
	const entity: AlgebraIntegral_DefaultFee = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		newDefaultFee: event.params.newDefaultFee,
	}

	context.AlgebraIntegral_DefaultFee.set(entity)
})

AlgebraIntegral.DefaultPluginFactory.handler(async ({ event, context }) => {
	const entity: AlgebraIntegral_DefaultPluginFactory = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		defaultPluginFactoryAddress: event.params.defaultPluginFactoryAddress,
	}

	context.AlgebraIntegral_DefaultPluginFactory.set(entity)
})

AlgebraIntegral.DefaultTickspacing.handler(async ({ event, context }) => {
	const entity: AlgebraIntegral_DefaultTickspacing = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		newDefaultTickspacing: event.params.newDefaultTickspacing,
	}

	context.AlgebraIntegral_DefaultTickspacing.set(entity)
})

AlgebraIntegral.OwnershipTransferStarted.handler(async ({ event, context }) => {
	const entity: AlgebraIntegral_OwnershipTransferStarted = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		previousOwner: event.params.previousOwner,
		newOwner: event.params.newOwner,
	}

	context.AlgebraIntegral_OwnershipTransferStarted.set(entity)
})

AlgebraIntegral.OwnershipTransferred.handler(async ({ event, context }) => {
	const entity: AlgebraIntegral_OwnershipTransferred = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		previousOwner: event.params.previousOwner,
		newOwner: event.params.newOwner,
	}

	context.AlgebraIntegral_OwnershipTransferred.set(entity)
})

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
})

AlgebraIntegral.RenounceOwnershipFinish.handler(async ({ event, context }) => {
	const entity: AlgebraIntegral_RenounceOwnershipFinish = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		timestamp: event.params.timestamp,
	}

	context.AlgebraIntegral_RenounceOwnershipFinish.set(entity)
})

AlgebraIntegral.RenounceOwnershipStart.handler(async ({ event, context }) => {
	const entity: AlgebraIntegral_RenounceOwnershipStart = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		timestamp: event.params.timestamp,
		finishTimestamp: event.params.finishTimestamp,
	}

	context.AlgebraIntegral_RenounceOwnershipStart.set(entity)
})

AlgebraIntegral.RenounceOwnershipStop.handler(async ({ event, context }) => {
	const entity: AlgebraIntegral_RenounceOwnershipStop = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		timestamp: event.params.timestamp,
	}

	context.AlgebraIntegral_RenounceOwnershipStop.set(entity)
})

AlgebraIntegral.RoleAdminChanged.handler(async ({ event, context }) => {
	const entity: AlgebraIntegral_RoleAdminChanged = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		role: event.params.role,
		previousAdminRole: event.params.previousAdminRole,
		newAdminRole: event.params.newAdminRole,
	}

	context.AlgebraIntegral_RoleAdminChanged.set(entity)
})

AlgebraIntegral.RoleGranted.handler(async ({ event, context }) => {
	const entity: AlgebraIntegral_RoleGranted = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		role: event.params.role,
		account: event.params.account,
		sender: event.params.sender,
	}

	context.AlgebraIntegral_RoleGranted.set(entity)
})

AlgebraIntegral.RoleRevoked.handler(async ({ event, context }) => {
	const entity: AlgebraIntegral_RoleRevoked = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		role: event.params.role,
		account: event.params.account,
		sender: event.params.sender,
	}

	context.AlgebraIntegral_RoleRevoked.set(entity)
})

AlgebraIntegral.VaultFactory.handler(async ({ event, context }) => {
	const entity: AlgebraIntegral_VaultFactory = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		newVaultFactory: event.params.newVaultFactory,
	}

	context.AlgebraIntegral_VaultFactory.set(entity)
})

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
})

VoltageV3Factory.FeeAmountEnabled.handler(async ({ event, context }) => {
	const entity: VoltageV3Factory_FeeAmountEnabled = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		fee: event.params.fee,
		tickSpacing: event.params.tickSpacing,
	}

	context.VoltageV3Factory_FeeAmountEnabled.set(entity)
})

VoltageV3Factory.FeeAmountExtraInfoUpdated.handler(
	async ({ event, context }) => {
		const entity: VoltageV3Factory_FeeAmountExtraInfoUpdated = {
			id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
			fee: event.params.fee,
			whitelistRequested: event.params.whitelistRequested,
			enabled: event.params.enabled,
		}

		context.VoltageV3Factory_FeeAmountExtraInfoUpdated.set(entity)
	},
)

VoltageV3Factory.OwnerChanged.handler(async ({ event, context }) => {
	const entity: VoltageV3Factory_OwnerChanged = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		oldOwner: event.params.oldOwner,
		newOwner: event.params.newOwner,
	}

	context.VoltageV3Factory_OwnerChanged.set(entity)
})

VoltageV3Factory.PoolCreated.handler(async ({ event, context }) => {
	const entity: VoltageV3Factory_PoolCreated = {
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
		factory: "VoltageV3",
	}

	context.Pool.set(pool)

	context.VoltageV3Factory_PoolCreated.set(entity)
})

VoltageV3Factory.SetLmPoolDeployer.handler(async ({ event, context }) => {
	const entity: VoltageV3Factory_SetLmPoolDeployer = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		lmPoolDeployer: event.params.lmPoolDeployer,
	}

	context.VoltageV3Factory_SetLmPoolDeployer.set(entity)
})

VoltageV3Factory.WhiteListAdded.handler(async ({ event, context }) => {
	const entity: VoltageV3Factory_WhiteListAdded = {
		id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
		user: event.params.user,
		verified: event.params.verified,
	}

	context.VoltageV3Factory_WhiteListAdded.set(entity)
})
