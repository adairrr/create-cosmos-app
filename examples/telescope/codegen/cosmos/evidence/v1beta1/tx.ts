import { Any, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidence {
  submitter: string;
  evidence?: Any | undefined;
}
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidenceSDKType {
  submitter: string;
  evidence?: AnySDKType | undefined;
}
/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponse {
  /** hash defines the hash of the evidence. */
  hash: Uint8Array;
}
/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponseSDKType {
  hash: Uint8Array;
}
function createBaseMsgSubmitEvidence(): MsgSubmitEvidence {
  return {
    submitter: "",
    evidence: undefined
  };
}
export const MsgSubmitEvidence = {
  encode(message: MsgSubmitEvidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.submitter !== "") {
      writer.uint32(10).string(message.submitter);
    }
    if (message.evidence !== undefined) {
      Any.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitEvidence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submitter = reader.string();
          break;
        case 2:
          message.evidence = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitEvidence>): MsgSubmitEvidence {
    const message = createBaseMsgSubmitEvidence();
    message.submitter = object.submitter ?? "";
    message.evidence = object.evidence !== undefined && object.evidence !== null ? Any.fromPartial(object.evidence) : undefined;
    return message;
  }
};
function createBaseMsgSubmitEvidenceResponse(): MsgSubmitEvidenceResponse {
  return {
    hash: new Uint8Array()
  };
}
export const MsgSubmitEvidenceResponse = {
  encode(message: MsgSubmitEvidenceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitEvidenceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitEvidenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgSubmitEvidenceResponse>): MsgSubmitEvidenceResponse {
    const message = createBaseMsgSubmitEvidenceResponse();
    message.hash = object.hash ?? new Uint8Array();
    return message;
  }
};