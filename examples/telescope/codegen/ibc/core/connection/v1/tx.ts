import { Counterparty, CounterpartySDKType, Version, VersionSDKType } from "./connection";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightSDKType } from "../../client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/**
 * MsgConnectionOpenInit defines the msg sent by an account on Chain A to
 * initialize a connection with Chain B.
 */
export interface MsgConnectionOpenInit {
  clientId: string;
  counterparty?: Counterparty | undefined;
  version?: Version | undefined;
  delayPeriod: bigint;
  signer: string;
}
/**
 * MsgConnectionOpenInit defines the msg sent by an account on Chain A to
 * initialize a connection with Chain B.
 */
export interface MsgConnectionOpenInitSDKType {
  client_id: string;
  counterparty?: CounterpartySDKType | undefined;
  version?: VersionSDKType | undefined;
  delay_period: bigint;
  signer: string;
}
/**
 * MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response
 * type.
 */
export interface MsgConnectionOpenInitResponse {}
/**
 * MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response
 * type.
 */
export interface MsgConnectionOpenInitResponseSDKType {}
/**
 * MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a
 * connection on Chain B.
 */
export interface MsgConnectionOpenTry {
  clientId: string;
  /**
   * in the case of crossing hello's, when both chains call OpenInit, we need
   * the connection identifier of the previous connection in state INIT
   */
  previousConnectionId: string;
  clientState?: Any | undefined;
  counterparty?: Counterparty | undefined;
  delayPeriod: bigint;
  counterpartyVersions: Version[];
  proofHeight?: Height | undefined;
  /**
   * proof of the initialization the connection on Chain A: `UNITIALIZED ->
   * INIT`
   */
  proofInit: Uint8Array;
  /** proof of client state included in message */
  proofClient: Uint8Array;
  /** proof of client consensus state */
  proofConsensus: Uint8Array;
  consensusHeight?: Height | undefined;
  signer: string;
}
/**
 * MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a
 * connection on Chain B.
 */
export interface MsgConnectionOpenTrySDKType {
  client_id: string;
  previous_connection_id: string;
  client_state?: AnySDKType | undefined;
  counterparty?: CounterpartySDKType | undefined;
  delay_period: bigint;
  counterparty_versions: VersionSDKType[];
  proof_height?: HeightSDKType | undefined;
  proof_init: Uint8Array;
  proof_client: Uint8Array;
  proof_consensus: Uint8Array;
  consensus_height?: HeightSDKType | undefined;
  signer: string;
}
/** MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type. */
export interface MsgConnectionOpenTryResponse {}
/** MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type. */
export interface MsgConnectionOpenTryResponseSDKType {}
/**
 * MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to
 * acknowledge the change of connection state to TRYOPEN on Chain B.
 */
export interface MsgConnectionOpenAck {
  connectionId: string;
  counterpartyConnectionId: string;
  version?: Version | undefined;
  clientState?: Any | undefined;
  proofHeight?: Height | undefined;
  /**
   * proof of the initialization the connection on Chain B: `UNITIALIZED ->
   * TRYOPEN`
   */
  proofTry: Uint8Array;
  /** proof of client state included in message */
  proofClient: Uint8Array;
  /** proof of client consensus state */
  proofConsensus: Uint8Array;
  consensusHeight?: Height | undefined;
  signer: string;
}
/**
 * MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to
 * acknowledge the change of connection state to TRYOPEN on Chain B.
 */
export interface MsgConnectionOpenAckSDKType {
  connection_id: string;
  counterparty_connection_id: string;
  version?: VersionSDKType | undefined;
  client_state?: AnySDKType | undefined;
  proof_height?: HeightSDKType | undefined;
  proof_try: Uint8Array;
  proof_client: Uint8Array;
  proof_consensus: Uint8Array;
  consensus_height?: HeightSDKType | undefined;
  signer: string;
}
/** MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type. */
export interface MsgConnectionOpenAckResponse {}
/** MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type. */
export interface MsgConnectionOpenAckResponseSDKType {}
/**
 * MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of connection state to OPEN on Chain A.
 */
export interface MsgConnectionOpenConfirm {
  connectionId: string;
  /** proof for the change of the connection state on Chain A: `INIT -> OPEN` */
  proofAck: Uint8Array;
  proofHeight?: Height | undefined;
  signer: string;
}
/**
 * MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of connection state to OPEN on Chain A.
 */
export interface MsgConnectionOpenConfirmSDKType {
  connection_id: string;
  proof_ack: Uint8Array;
  proof_height?: HeightSDKType | undefined;
  signer: string;
}
/**
 * MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm
 * response type.
 */
export interface MsgConnectionOpenConfirmResponse {}
/**
 * MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm
 * response type.
 */
export interface MsgConnectionOpenConfirmResponseSDKType {}
function createBaseMsgConnectionOpenInit(): MsgConnectionOpenInit {
  return {
    clientId: "",
    counterparty: undefined,
    version: undefined,
    delayPeriod: BigInt("0"),
    signer: ""
  };
}
export const MsgConnectionOpenInit = {
  encode(message: MsgConnectionOpenInit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(18).fork()).ldelim();
    }
    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }
    if (message.delayPeriod !== BigInt(0)) {
      writer.uint32(32).uint64(message.delayPeriod);
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConnectionOpenInit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 3:
          message.version = Version.decode(reader, reader.uint32());
          break;
        case 4:
          message.delayPeriod = BigInt(reader.uint64().toString());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgConnectionOpenInit>): MsgConnectionOpenInit {
    const message = createBaseMsgConnectionOpenInit();
    message.clientId = object.clientId ?? "";
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.version = object.version !== undefined && object.version !== null ? Version.fromPartial(object.version) : undefined;
    message.delayPeriod = object.delayPeriod !== undefined && object.delayPeriod !== null ? BigInt(object.delayPeriod.toString()) : BigInt("0");
    message.signer = object.signer ?? "";
    return message;
  }
};
function createBaseMsgConnectionOpenInitResponse(): MsgConnectionOpenInitResponse {
  return {};
}
export const MsgConnectionOpenInitResponse = {
  encode(_: MsgConnectionOpenInitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConnectionOpenInitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgConnectionOpenInitResponse>): MsgConnectionOpenInitResponse {
    const message = createBaseMsgConnectionOpenInitResponse();
    return message;
  }
};
function createBaseMsgConnectionOpenTry(): MsgConnectionOpenTry {
  return {
    clientId: "",
    previousConnectionId: "",
    clientState: undefined,
    counterparty: undefined,
    delayPeriod: BigInt("0"),
    counterpartyVersions: [],
    proofHeight: undefined,
    proofInit: new Uint8Array(),
    proofClient: new Uint8Array(),
    proofConsensus: new Uint8Array(),
    consensusHeight: undefined,
    signer: ""
  };
}
export const MsgConnectionOpenTry = {
  encode(message: MsgConnectionOpenTry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.previousConnectionId !== "") {
      writer.uint32(18).string(message.previousConnectionId);
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(26).fork()).ldelim();
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
    }
    if (message.delayPeriod !== BigInt(0)) {
      writer.uint32(40).uint64(message.delayPeriod);
    }
    for (const v of message.counterpartyVersions) {
      Version.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(58).fork()).ldelim();
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(66).bytes(message.proofInit);
    }
    if (message.proofClient.length !== 0) {
      writer.uint32(74).bytes(message.proofClient);
    }
    if (message.proofConsensus.length !== 0) {
      writer.uint32(82).bytes(message.proofConsensus);
    }
    if (message.consensusHeight !== undefined) {
      Height.encode(message.consensusHeight, writer.uint32(90).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(98).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConnectionOpenTry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenTry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.previousConnectionId = reader.string();
          break;
        case 3:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 5:
          message.delayPeriod = BigInt(reader.uint64().toString());
          break;
        case 6:
          message.counterpartyVersions.push(Version.decode(reader, reader.uint32()));
          break;
        case 7:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.proofInit = reader.bytes();
          break;
        case 9:
          message.proofClient = reader.bytes();
          break;
        case 10:
          message.proofConsensus = reader.bytes();
          break;
        case 11:
          message.consensusHeight = Height.decode(reader, reader.uint32());
          break;
        case 12:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgConnectionOpenTry>): MsgConnectionOpenTry {
    const message = createBaseMsgConnectionOpenTry();
    message.clientId = object.clientId ?? "";
    message.previousConnectionId = object.previousConnectionId ?? "";
    message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.delayPeriod = object.delayPeriod !== undefined && object.delayPeriod !== null ? BigInt(object.delayPeriod.toString()) : BigInt("0");
    message.counterpartyVersions = object.counterpartyVersions?.map(e => Version.fromPartial(e)) || [];
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.proofInit = object.proofInit ?? new Uint8Array();
    message.proofClient = object.proofClient ?? new Uint8Array();
    message.proofConsensus = object.proofConsensus ?? new Uint8Array();
    message.consensusHeight = object.consensusHeight !== undefined && object.consensusHeight !== null ? Height.fromPartial(object.consensusHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }
};
function createBaseMsgConnectionOpenTryResponse(): MsgConnectionOpenTryResponse {
  return {};
}
export const MsgConnectionOpenTryResponse = {
  encode(_: MsgConnectionOpenTryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConnectionOpenTryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenTryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgConnectionOpenTryResponse>): MsgConnectionOpenTryResponse {
    const message = createBaseMsgConnectionOpenTryResponse();
    return message;
  }
};
function createBaseMsgConnectionOpenAck(): MsgConnectionOpenAck {
  return {
    connectionId: "",
    counterpartyConnectionId: "",
    version: undefined,
    clientState: undefined,
    proofHeight: undefined,
    proofTry: new Uint8Array(),
    proofClient: new Uint8Array(),
    proofConsensus: new Uint8Array(),
    consensusHeight: undefined,
    signer: ""
  };
}
export const MsgConnectionOpenAck = {
  encode(message: MsgConnectionOpenAck, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.counterpartyConnectionId !== "") {
      writer.uint32(18).string(message.counterpartyConnectionId);
    }
    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(34).fork()).ldelim();
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
    }
    if (message.proofTry.length !== 0) {
      writer.uint32(50).bytes(message.proofTry);
    }
    if (message.proofClient.length !== 0) {
      writer.uint32(58).bytes(message.proofClient);
    }
    if (message.proofConsensus.length !== 0) {
      writer.uint32(66).bytes(message.proofConsensus);
    }
    if (message.consensusHeight !== undefined) {
      Height.encode(message.consensusHeight, writer.uint32(74).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(82).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConnectionOpenAck {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.counterpartyConnectionId = reader.string();
          break;
        case 3:
          message.version = Version.decode(reader, reader.uint32());
          break;
        case 4:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 5:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 6:
          message.proofTry = reader.bytes();
          break;
        case 7:
          message.proofClient = reader.bytes();
          break;
        case 8:
          message.proofConsensus = reader.bytes();
          break;
        case 9:
          message.consensusHeight = Height.decode(reader, reader.uint32());
          break;
        case 10:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgConnectionOpenAck>): MsgConnectionOpenAck {
    const message = createBaseMsgConnectionOpenAck();
    message.connectionId = object.connectionId ?? "";
    message.counterpartyConnectionId = object.counterpartyConnectionId ?? "";
    message.version = object.version !== undefined && object.version !== null ? Version.fromPartial(object.version) : undefined;
    message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.proofTry = object.proofTry ?? new Uint8Array();
    message.proofClient = object.proofClient ?? new Uint8Array();
    message.proofConsensus = object.proofConsensus ?? new Uint8Array();
    message.consensusHeight = object.consensusHeight !== undefined && object.consensusHeight !== null ? Height.fromPartial(object.consensusHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }
};
function createBaseMsgConnectionOpenAckResponse(): MsgConnectionOpenAckResponse {
  return {};
}
export const MsgConnectionOpenAckResponse = {
  encode(_: MsgConnectionOpenAckResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConnectionOpenAckResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenAckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgConnectionOpenAckResponse>): MsgConnectionOpenAckResponse {
    const message = createBaseMsgConnectionOpenAckResponse();
    return message;
  }
};
function createBaseMsgConnectionOpenConfirm(): MsgConnectionOpenConfirm {
  return {
    connectionId: "",
    proofAck: new Uint8Array(),
    proofHeight: undefined,
    signer: ""
  };
}
export const MsgConnectionOpenConfirm = {
  encode(message: MsgConnectionOpenConfirm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.proofAck.length !== 0) {
      writer.uint32(18).bytes(message.proofAck);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConnectionOpenConfirm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.proofAck = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgConnectionOpenConfirm>): MsgConnectionOpenConfirm {
    const message = createBaseMsgConnectionOpenConfirm();
    message.connectionId = object.connectionId ?? "";
    message.proofAck = object.proofAck ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }
};
function createBaseMsgConnectionOpenConfirmResponse(): MsgConnectionOpenConfirmResponse {
  return {};
}
export const MsgConnectionOpenConfirmResponse = {
  encode(_: MsgConnectionOpenConfirmResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConnectionOpenConfirmResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgConnectionOpenConfirmResponse>): MsgConnectionOpenConfirmResponse {
    const message = createBaseMsgConnectionOpenConfirmResponse();
    return message;
  }
};