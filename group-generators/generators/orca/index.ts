
import { Tags, ValueType, GroupWithData } from "topics/group";
import {
  GenerationContext,
  GenerationFrequency,
  GroupGenerator,
} from "topics/group-generator";

// Generated from factory.sismo.io

const generator: GroupGenerator = {
  
  generationFrequency: GenerationFrequency.Once,
  
  generate: async (context: GenerationContext): Promise<GroupWithData[]> => {
  
    
    const jsonListData0 = {
      "0xdf2adf272e40fe277321b21aa58ddccc3bc648ee": "1",
      "0xfbb301A80D35A6f3d3ce884E30A2a1B9B72c3CD4": "1",
      "0x4979D736002b11584f9672DaFa468919C0d0D7DF": "1",
      "0xe08538D4ED08332AeE4C9d5fa427236Fa78a2F36": "1",
      "0xF96b407459Ab866fE18Cc9BE30694182C74f38B7": "1",
      "0x72b61c6014342d914470eC7aC2975bE345796c2b": "1",
      "0xBD90F0243173E91385224a8117212d17C2E9e494": "1",
      "0x9a7Fb7435cb80A31B35B7F48be569b580934D0b3": "1",
      "0x2b74a0422607869695F4D855B885e7165aa3E486": "1",
      "0xba1BD49760E543aEDe0b0BD325f92026D6345b1a": "1",
    };

    return [
      {
        name: "orca",
        timestamp: context.timestamp,
        description: "Have at least 10 transactions in BinanceSmartChain",
        specs: "",
        data: jsonListData0,
        valueType: ValueType.Score,
        tags: [Tags.Factory],
      },
    ];
  },
};

export default generator;
