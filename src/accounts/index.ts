import { Connection, PublicKey } from "@solana/web3.js";
import { toPublicKey } from "../utils";

export const getAccountInfo = async (connection: Connection, accountPubkey: string) => {
  const publicKey = toPublicKey(accountPubkey);
  return await connection.getAccountInfo(publicKey);
};