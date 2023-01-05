import { test, expect } from "vitest";
import { getFunctionNode } from "../src/main";

test("init", () => {
  const code = `
    function printTips() {
      return 'name'
    }
  `;

  const index = 10; // 光标所在的位置

  const functionNode = getFunctionNode(code, index);

  // 测试驱动开发
  // 第一步：写测试。在测试里描述这个测试Api的输入输出是什么样的。
  expect(functionNode).toEqual({
    name: "printTips",
    start: { line: 2, column: 4, index: 5 },
    end: { line: 4, column: 5, index: 53 },
  });
  // expect(true).toBe(true);
});
