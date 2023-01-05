import { parse } from "@babel/parser";
const traverse = require("@babel/traverse").default;

interface FunctionNode {
  start: {
    line: number;
    column: number;
    index: number;
  };
  end: {
    line: number;
    column: number;
    index: number;
  };
}

export function getFunctionNode(code: string, index: number): FunctionNode | undefined {
  let functionNode; // 创建节点

  const ast = parse(code); // 生成 ast
  // console.log("ast", ast);

  traverse(ast, {
    FunctionDeclaration(path: any) {
      console.log("path.node", path.node);

      if (index >= path.node?.start! && index <= path.node?.end!) {
        functionNode = {
          name: path.node?.id?.name,
          start: path.node?.loc?.start,
          end: path.node?.loc?.end,
        };
      }
    },
  });

  return functionNode;
}
