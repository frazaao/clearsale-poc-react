import { useCallback, useEffect, useRef } from "react";
import * as CSLiveness from "@studio/csliveness";

export function useClearsaleLiveness(
  accessToken: string,
  transactionId: string
) {
  const sdkRef = useRef<CSLiveness.Instance>();

  const launchCamera = useCallback(() => {
    sdkRef.current?.open();
  }, [sdkRef]);

  useEffect(() => {
    if (!accessToken || !transactionId) return;
    sdkRef.current = new CSLiveness.Instance({
      accessToken,
      transactionId,
      pathResources: "/core-sdk",
      debug: false,
    });

    sdkRef.current.on("onReady", () => console.log("SDK is ready"));
    sdkRef.current.on("onCompleted", (image) => console.log(image));
    sdkRef.current.on("onError", (error) => console.log(error));
    sdkRef.current.initialize();
  }, [accessToken, transactionId]);

  return {
    launchCamera,
  };
}
