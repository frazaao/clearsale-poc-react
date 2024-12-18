declare module "@clear.sale/sdk-docs-web" {
  export type SDKClearSaleLoginFunction = () => Promise<{
    accessToken: string;
    expiresIn: number;
  }>;

  export type SDKClearSaleIdentityConfig = {
    identifierId: string;
    cpf: string;
  };

  export type SDKClearSaleColorsConfig = {
    primary: string;
    secondary: string;
    tertiary: string;
    title: string;
    paragraph: string;
  };

  export type SDKClearSaleEnvironmentConfig = {
    env: ENVIRONMENTS;
  };

  export type SDKClearSaleConfig = {
    login: SDKClearSaleLoginFunction;
    environment: SDKClearSaleEnvironmentConfig;
    identity: SDKClearSaleIdentityConfig;
    colors: SDKClearSaleColorsConfig;
    flowTypes: FLOW_TYPES[];
  };

  export const SDKClearSale: (
    config: SDKClearSaleConfig
  ) => SDKClearSaleInstance;

  export type SDKClearSaleInstancePreloadFunction = (params: {
    onLoaded: (auth: { accessToken: string; expiresIn: number }) => void;
  }) => Promise<void>;

  export type SDKClearSaleInstanceInitFunctionResult = {
    sessionId: string;
    documentType: string;
    exitReason: string;
  };

  export type SDKClearSaleInstanceInitFunction =
    () => Promise<SDKClearSaleInstanceInitFunctionResult>;

  export type SDKClearSaleInstance = {
    preLoad: SDKClearSaleInstancePreloadFunction;
    init: SDKClearSaleInstanceInitFunction;
  };

  export enum FLOW_TYPES {
    CAPTURE = "CAPTURE",
    UPLOAD = "UPLOAD",
  }

  export enum ENVIRONMENTS {
    DEV = "DEV",
    HML = "HML",
    PRD = "PRD",
  }
}
