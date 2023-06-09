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
//   "0:8ef14ce80331321173089937bda45793527041d584b6872718f066c6fe8cc1ac"
const writerAddres = new Address(
  "0:afefb890de1de9fc1bc6ad3332eb07ba4854e35b2fd3f98fff1bcc0e06110dde"
);

async function getPosts() {
  if (!(await ever.hasProvider())) {
    throw new Error("Extension is not installed");
  }
  await ever.ensureInitialized();
  await ever.requestPermissions({
    permissions: ['basic'],
  });

  const writerAbi = new ever.Contract(WriterAbi, writerAddres);

  const transaction = await writerAbi.methods.getDetails({}).call();
  return transaction._state;
}

export default getPosts;
