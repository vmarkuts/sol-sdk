import { TransactionInstruction, PublicKey } from "@solana/web3.js";

export const createTransferInstruction = (
  fromPubkey: PublicKey,
  toPubkey: PublicKey,
  amount: number
): TransactionInstruction => {
  return new TransactionInstruction({
    keys: [
      { pubkey: fromPubkey, isSigner: true, isWritable: true },
      { pubkey: toPubkey, isSigner: false, isWritable: true },
    ],
    programId: new PublicKey("YourProgramPublicKeyHere"),
    data: Buffer.from(new Uint8Array([amount])), // Replace with actual serialization logic
  });
};