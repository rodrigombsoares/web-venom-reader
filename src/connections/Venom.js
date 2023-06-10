import { Address, ProviderRpcClient } from "everscale-inpage-provider";
import { EverscaleStandaloneClient } from "everscale-standalone-client";

const VENOM_TESTNET_ENDPOINT = "https://jrpc-devnet.venom.foundation/";
const VENOM_TESTNET_TRACE_ENDPOINT = "https://gql-devnet.venom.network/graphql";

const ever = new ProviderRpcClient({
  fallback: () =>
    EverscaleStandaloneClient.create({
      connection: {
        id: 1000,
        type: "jrpc",
        group: "dev",
        data: {
          endpoint: VENOM_TESTNET_ENDPOINT,
        },
      },
      tracing: {
        endpoint: VENOM_TESTNET_TRACE_ENDPOINT,
      },
    }),
});

const WriterAbi = require("./Writer.abi.json");

const writerAddres = new Address(
  "0:7ac5b9fbd9cff6ecbdd554a1e677ea91e4cb28e5e44e1a40578aa6109c6ffea5"
);

async function getPosts() {
  if (!(await ever.hasProvider())) {
    throw new Error("Extension is not installed");
  }
  await ever.ensureInitialized();
  await ever.requestPermissions({
    permissions: ["basic"],
  });

  const writerAbi = new ever.Contract(WriterAbi, writerAddres);

  const transaction = await writerAbi.methods.getDetails({}).call();
  return transaction._state;
}

export default getPosts;
