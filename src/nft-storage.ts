import { Address, BigInt } from "@graphprotocol/graph-ts";
import { ItemAdded as ItemAddedEvent } from "../generated/NFTStorage/NFTStorage";
import { ItemAdded } from "../generated/schema";

export function handleItemAdded(event: ItemAddedEvent): void {
  let entity = ItemAdded.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  );
  if (!entity) {
    entity = new ItemAdded(
      getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    );
  }
  entity.owner = event.params.owner;
  entity.nftAddress = event.params.nftAddress;
  entity.tokenId = event.params.tokenId;
  entity.enable = event.params.enable;
  entity.scale = event.params.scale;
  entity.speed = event.params.speed;
  entity.x = event.params.x;
  entity.y = event.params.y;
  entity.z = event.params.z;

  entity.save();
}

function getIdFromEventParams(tokenId: BigInt, nftAddress: Address): string {
  return tokenId.toHexString() + nftAddress.toHexString();
}
