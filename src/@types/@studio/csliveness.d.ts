declare module "@studio/csliveness" {
  export interface LegacyInstanceContructorProps {
    clientID: string;
    clientSecret: string;
    identifierId: string;
    cpf: string;
    debug?: boolean;
  }
  export interface InstanceConstructorProps {
    accessToken: string;
    transactionId: string;
    pathResources: string;
    debug?: boolean;
  }

  export interface OnCompletedResponse {
    image: string;
    sessionId: string;
  }

  export class Instance {
    constructor(props: InstanceConstructorProps);

    constructor(props: LegacyInstanceContructorProps);

    on(eventName: "onReady", callback: () => void): void;

    on(
      eventName: "onCompleted",
      callback: (response: OnCompletedResponse) => void
    ): void;

    on(eventName: "onError", callback: (error: string) => void): void;

    open(): void;

    initialize(): void;
  }
}
