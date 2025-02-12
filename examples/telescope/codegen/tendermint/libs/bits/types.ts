import { BinaryReader, BinaryWriter } from "../../../binary";
export interface BitArray {
  bits: bigint;
  elems: bigint[];
}
export interface BitArraySDKType {
  bits: bigint;
  elems: bigint[];
}
function createBaseBitArray(): BitArray {
  return {
    bits: BigInt("0"),
    elems: []
  };
}
export const BitArray = {
  encode(message: BitArray, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bits !== BigInt(0)) {
      writer.uint32(8).int64(message.bits);
    }
    writer.uint32(18).fork();
    for (const v of message.elems) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BitArray {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBitArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bits = BigInt(reader.int64().toString());
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.elems.push(BigInt(reader.uint64().toString()));
            }
          } else {
            message.elems.push(BigInt(reader.uint64().toString()));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BitArray>): BitArray {
    const message = createBaseBitArray();
    message.bits = object.bits !== undefined && object.bits !== null ? BigInt(object.bits.toString()) : BigInt("0");
    message.elems = object.elems?.map(e => BigInt(e.toString())) || [];
    return message;
  }
};