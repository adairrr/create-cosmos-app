import * as _108 from "./applications/transfer/v1/genesis";
import * as _109 from "./applications/transfer/v1/query";
import * as _110 from "./applications/transfer/v1/transfer";
import * as _111 from "./applications/transfer/v1/tx";
import * as _112 from "./applications/transfer/v2/packet";
import * as _113 from "./core/channel/v1/channel";
import * as _114 from "./core/channel/v1/genesis";
import * as _115 from "./core/channel/v1/query";
import * as _116 from "./core/channel/v1/tx";
import * as _117 from "./core/client/v1/client";
import * as _118 from "./core/client/v1/genesis";
import * as _119 from "./core/client/v1/query";
import * as _120 from "./core/client/v1/tx";
import * as _121 from "./core/commitment/v1/commitment";
import * as _122 from "./core/connection/v1/connection";
import * as _123 from "./core/connection/v1/genesis";
import * as _124 from "./core/connection/v1/query";
import * as _125 from "./core/connection/v1/tx";
import * as _126 from "./core/port/v1/query";
import * as _127 from "./core/types/v1/genesis";
import * as _128 from "./lightclients/localhost/v1/localhost";
import * as _129 from "./lightclients/solomachine/v1/solomachine";
import * as _130 from "./lightclients/solomachine/v2/solomachine";
import * as _131 from "./lightclients/tendermint/v1/tendermint";
import * as _276 from "./applications/transfer/v1/tx.amino";
import * as _277 from "./core/channel/v1/tx.amino";
import * as _278 from "./core/client/v1/tx.amino";
import * as _279 from "./core/connection/v1/tx.amino";
import * as _280 from "./applications/transfer/v1/tx.registry";
import * as _281 from "./core/channel/v1/tx.registry";
import * as _282 from "./core/client/v1/tx.registry";
import * as _283 from "./core/connection/v1/tx.registry";
import * as _284 from "./applications/transfer/v1/query.lcd";
import * as _285 from "./core/channel/v1/query.lcd";
import * as _286 from "./core/client/v1/query.lcd";
import * as _287 from "./core/connection/v1/query.lcd";
import * as _288 from "./applications/transfer/v1/query.rpc.Query";
import * as _289 from "./core/channel/v1/query.rpc.Query";
import * as _290 from "./core/client/v1/query.rpc.Query";
import * as _291 from "./core/connection/v1/query.rpc.Query";
import * as _292 from "./core/port/v1/query.rpc.Query";
import * as _293 from "./applications/transfer/v1/tx.rpc.msg";
import * as _294 from "./core/channel/v1/tx.rpc.msg";
import * as _295 from "./core/client/v1/tx.rpc.msg";
import * as _296 from "./core/connection/v1/tx.rpc.msg";
import * as _350 from "./lcd";
import * as _351 from "./rpc.query";
import * as _352 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._108,
        ..._109,
        ..._110,
        ..._111,
        ..._276,
        ..._280,
        ..._284,
        ..._288,
        ..._293
      };
      export const v2 = {
        ..._112
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._113,
        ..._114,
        ..._115,
        ..._116,
        ..._277,
        ..._281,
        ..._285,
        ..._289,
        ..._294
      };
    }
    export namespace client {
      export const v1 = {
        ..._117,
        ..._118,
        ..._119,
        ..._120,
        ..._278,
        ..._282,
        ..._286,
        ..._290,
        ..._295
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._121
      };
    }
    export namespace connection {
      export const v1 = {
        ..._122,
        ..._123,
        ..._124,
        ..._125,
        ..._279,
        ..._283,
        ..._287,
        ..._291,
        ..._296
      };
    }
    export namespace port {
      export const v1 = {
        ..._126,
        ..._292
      };
    }
    export namespace types {
      export const v1 = {
        ..._127
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._128
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._129
      };
      export const v2 = {
        ..._130
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._131
      };
    }
  }
  export const ClientFactory = {
    ..._350,
    ..._351,
    ..._352
  };
}