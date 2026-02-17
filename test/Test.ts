import assert from "assert";
import { 
  TestHelpers,
  AlgebraIntegral_CustomPool
} from "generated";
const { MockDb, AlgebraIntegral } = TestHelpers;

describe("AlgebraIntegral contract CustomPool event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for AlgebraIntegral contract CustomPool event
  const event = AlgebraIntegral.CustomPool.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("AlgebraIntegral_CustomPool is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await AlgebraIntegral.CustomPool.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualAlgebraIntegralCustomPool = mockDbUpdated.entities.AlgebraIntegral_CustomPool.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedAlgebraIntegralCustomPool: AlgebraIntegral_CustomPool = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      deployer: event.params.deployer,
      token0: event.params.token0,
      token1: event.params.token1,
      pool: event.params.pool,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualAlgebraIntegralCustomPool, expectedAlgebraIntegralCustomPool, "Actual AlgebraIntegralCustomPool should be the same as the expectedAlgebraIntegralCustomPool");
  });
});
