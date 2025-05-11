
export default function handler(req, res) {
  res.status(200).json({
    chainId: "0xA0B6", // Monad Testnet
    method: "eth_sendTransaction",
    params: [{
      from: "{{sender}}",
      to: "0x85dcc4acf953436be7c41986560d1bdb144a4bbe",
      data: "0x1249c58b" // mint()
    }]
  });
}
