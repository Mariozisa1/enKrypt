import { NetworkNames, CoingeckoPlatform } from "@enkryptcom/types";
import { EvmNetwork, EvmNetworkOptions } from "../types/evm-network";
import wrapActivityHandler from "@/libs/activity-state/wrap-activity-handler";
import { EtherscanActivity } from "../libs/activity-handlers";
import shNFTHandler from "@/libs/nft-handlers/simplehash";

const immutableZkEvmOptions: EvmNetworkOptions = {
  name: NetworkNames.ImmutableZkevm,
  name_long: "Immutable zkEVM",
  homePage: "https://www.immutable.com/products/immutable-zkevm",
  blockExplorerTX: "https://explorer.immutable.com/tx/[[txHash]]",
  blockExplorerAddr: "https://explorer.immutable.com/address/[[address]]",
  chainID: "0x343b",
  isTestNetwork: false,
  currencyName: "IMX",
  currencyNameLong: "Immutable X",
  node: "https://rpc.immutable.com",
  icon: require("./icons/immutable-zkevm.png"),
  coingeckoID: "immutable-x",
  coingeckoPlatform: CoingeckoPlatform.ImmutableZkevm,
  NFTHandler: shNFTHandler,
  activityHandler: wrapActivityHandler(EtherscanActivity),
};

const immutableZkEvm = new EvmNetwork(immutableZkEvmOptions);

export default immutableZkEvm;