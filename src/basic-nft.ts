import { BigInt } from "@graphprotocol/graph-ts";
import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  ItemOwned as ItemOwnedEvent,
  Transfer as TransferEvent,
} from "../generated/BasicNFT/BasicNFT";
import {
  Approval,
  ApprovalForAll,
  ItemOwned,
  Transfer,
} from "../generated/schema";

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.owner = event.params.owner;
  entity.approved = event.params.approved;
  entity.tokenId = event.params.tokenId;

  entity.save();
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.owner = event.params.owner;
  entity.operator = event.params.operator;
  entity.approved = event.params.approved;

  entity.save();
}

export function handleItemOwned(event: ItemOwnedEvent): void {
  let entity = new ItemOwned(getIdFromEventParams(event.params.tokenId));

  entity.owner = event.params.owner;
  entity.tokenId = event.params.tokenId;
  
  entity.save();
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.tokenId = event.params.tokenId;

  entity.save();
}

function getIdFromEventParams(tokenId: BigInt): string {
  return tokenId.toHexString();
}
