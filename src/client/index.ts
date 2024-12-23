import { Connection, Keypair, PublicKey, Transaction, sendAndConfirmTransaction } from "@solana/web3.js";
import { createTransferInstruction } from "../instructions/transfer";

export class SolanaSDK {
  private connection: Connection;

  constructor(network: string) {
    this.connection = new Connection(network, "confirmed");
  }

  public async transfer(
    fromKeypair: Keypair,
    toPubkey: string,
    amount: number
  ): Promise<string> {
    const transaction = new Transaction().add(
      createTransferInstruction(
        fromKeypair.publicKey,
        new PublicKey(toPubkey),
        amount
      )
    );

    return await sendAndConfirmTransaction(this.connection, transaction, [fromKeypair]);
  }
}