import { WorldIDWidget } from "@worldcoin/id";

// Mount the component in your code at the place where you want to render the widget

const WorldCoin = () => {
  return (
    <>
      <div>
        <WorldIDWidget
          actionId="wid_BPZsRJANxct2cZxVRyh80SFG" // obtain this from developer.worldcoin.org
          signal="my_signal"
          enableTelemetry
          onSuccess={(verificationResponse) =>
            console.log(verificationResponse)
          } // you'll actually want to pass the proof to the API or your smart contract
          onError={(error) => console.error(error)}
        />
      </div>
    </>
  );
};

export default WorldCoin;
