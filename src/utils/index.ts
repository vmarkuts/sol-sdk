import { PublicKey } from "@solana/web3.js";

export const toPublicKey = (key: string): PublicKey => new PublicKey(key);