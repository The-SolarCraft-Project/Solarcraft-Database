import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { ItemAdded } from "../generated/NFTStorage/NFTStorage"

export function createItemAddedEvent(
  owner: Address,
  nftAddress: Address,
  tokenId: BigInt,
  enable: boolean,
  scale: i32,
  speed: i32,
  x: i32,
  y: i32,
  z: i32
): ItemAdded {
  let itemAddedEvent = changetype<ItemAdded>(newMockEvent())

  itemAddedEvent.parameters = new Array()

  itemAddedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  itemAddedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  itemAddedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  itemAddedEvent.parameters.push(
    new ethereum.EventParam("enable", ethereum.Value.fromBoolean(enable))
  )
  itemAddedEvent.parameters.push(
    new ethereum.EventParam(
      "scale",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(scale))
    )
  )
  itemAddedEvent.parameters.push(
    new ethereum.EventParam(
      "speed",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(speed))
    )
  )
  itemAddedEvent.parameters.push(
    new ethereum.EventParam("x", ethereum.Value.fromI32(x))
  )
  itemAddedEvent.parameters.push(
    new ethereum.EventParam("y", ethereum.Value.fromI32(y))
  )
  itemAddedEvent.parameters.push(
    new ethereum.EventParam("z", ethereum.Value.fromI32(z))
  )

  return itemAddedEvent
}
