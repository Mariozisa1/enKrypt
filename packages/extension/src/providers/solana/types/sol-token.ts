import { BaseToken, BaseTokenOptions } from "@/types/base-token";
import SolanaAPI from "@/providers/bitcoin/libs/api";

export interface SolTokenOptions extends BaseTokenOptions {
  contract: string;
}

export class SOLToken extends BaseToken {
  contract: string;
  constructor(options: SolTokenOptions) {
    super(options);
    this.contract = options.contract;
  }

  public async getLatestUserBalance(
    api: SolanaAPI,
    pubkey: string
  ): Promise<string> {
    return api.getBalance(pubkey);
  }

  public async send(): Promise<any> {
    throw new Error("sol-send is not implemented here");
  }
}