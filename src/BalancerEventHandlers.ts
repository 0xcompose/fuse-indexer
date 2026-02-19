import { BalancerV2Vault } from "generated"
import { incrementChainMetricsForPool } from "./metrics"
import { getEventId } from "./eventId"
import { globalHandlerConfig } from "./handlerConfig"

BalancerV2Vault.PoolRegistered.handler(async ({ event, context }) => {
	const poolId = `${event.chainId}:${event.params.poolId}`

	await incrementChainMetricsForPool(context, event.chainId, "BalancerV2")

	context.Pool.set({
		id: poolId,
		chainId: event.chainId,
		address: event.params.poolAddress,
		protocol: "BalancerV2",
		creatorContract: event.srcAddress,
	})

	context.BalancerV2Vault_PoolRegistered.set({
		id: getEventId(event),
		poolId: event.params.poolId,
		poolAddress: event.params.poolAddress,
		specialization: event.params.specialization.toString(),
	})
}, globalHandlerConfig)
