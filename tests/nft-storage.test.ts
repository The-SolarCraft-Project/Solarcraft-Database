import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ItemAdded } from "../generated/schema"
import { ItemAdded as ItemAddedEvent } from "../generated/NFTStorage/NFTStorage"
import { handleItemAdded } from "../src/nft-storage"
import { createItemAddedEvent } from "./nft-storage-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let nftAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let tokenId = BigInt.fromI32(234)
    let enable = "boolean Not implemented"
    let scale = 123
    let speed = 123
    let x = 123
    let y = 123
    let z = 123
    let newItemAddedEvent = createItemAddedEvent(
      owner,
      nftAddress,
      tokenId,
      enable,
      scale,
      speed,
      x,
      y,
      z
    )
    handleItemAdded(newItemAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ItemAdded created and stored", () => {
    assert.entityCount("ItemAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ItemAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ItemAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nftAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ItemAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenId",
      "234"
    )
    assert.fieldEquals(
      "ItemAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "enable",
      "boolean Not implemented"
    )
    assert.fieldEquals(
      "ItemAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "scale",
      "123"
    )
    assert.fieldEquals(
      "ItemAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "speed",
      "123"
    )
    assert.fieldEquals(
      "ItemAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "x",
      "123"
    )
    assert.fieldEquals(
      "ItemAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "y",
      "123"
    )
    assert.fieldEquals(
      "ItemAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "z",
      "123"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
