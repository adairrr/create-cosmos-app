import { BinaryReader, BinaryWriter } from "../../../binary";
/** Minter represents the minting state. */
export interface Minter {
  /** current annual inflation rate */
  inflation: string;
  /** current annual expected provisions */
  annualProvisions: string;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
  inflation: string;
  annual_provisions: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** maximum annual change in inflation rate */
  inflationRateChange: string;
  /** maximum inflation rate */
  inflationMax: string;
  /** minimum inflation rate */
  inflationMin: string;
  /** goal of percent bonded atoms */
  goalBonded: string;
  /** expected blocks per year */
  blocksPerYear: bigint;
}
/** Params holds parameters for the mint module. */
export interface ParamsSDKType {
  mint_denom: string;
  inflation_rate_change: string;
  inflation_max: string;
  inflation_min: string;
  goal_bonded: string;
  blocks_per_year: bigint;
}
function createBaseMinter(): Minter {
  return {
    inflation: "",
    annualProvisions: ""
  };
}
export const Minter = {
  encode(message: Minter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inflation !== "") {
      writer.uint32(10).string(message.inflation);
    }
    if (message.annualProvisions !== "") {
      writer.uint32(18).string(message.annualProvisions);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Minter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflation = reader.string();
          break;
        case 2:
          message.annualProvisions = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Minter>): Minter {
    const message = createBaseMinter();
    message.inflation = object.inflation ?? "";
    message.annualProvisions = object.annualProvisions ?? "";
    return message;
  }
};
function createBaseParams(): Params {
  return {
    mintDenom: "",
    inflationRateChange: "",
    inflationMax: "",
    inflationMin: "",
    goalBonded: "",
    blocksPerYear: BigInt("0")
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.inflationRateChange !== "") {
      writer.uint32(18).string(message.inflationRateChange);
    }
    if (message.inflationMax !== "") {
      writer.uint32(26).string(message.inflationMax);
    }
    if (message.inflationMin !== "") {
      writer.uint32(34).string(message.inflationMin);
    }
    if (message.goalBonded !== "") {
      writer.uint32(42).string(message.goalBonded);
    }
    if (message.blocksPerYear !== BigInt(0)) {
      writer.uint32(48).uint64(message.blocksPerYear);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;
        case 2:
          message.inflationRateChange = reader.string();
          break;
        case 3:
          message.inflationMax = reader.string();
          break;
        case 4:
          message.inflationMin = reader.string();
          break;
        case 5:
          message.goalBonded = reader.string();
          break;
        case 6:
          message.blocksPerYear = BigInt(reader.uint64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.inflationRateChange = object.inflationRateChange ?? "";
    message.inflationMax = object.inflationMax ?? "";
    message.inflationMin = object.inflationMin ?? "";
    message.goalBonded = object.goalBonded ?? "";
    message.blocksPerYear = object.blocksPerYear !== undefined && object.blocksPerYear !== null ? BigInt(object.blocksPerYear.toString()) : BigInt("0");
    return message;
  }
};