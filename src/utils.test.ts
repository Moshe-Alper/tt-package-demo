import { add } from "./util"; 
import { test, expect } from "vitest";

test("add", () => {
  expect(add(1, 2)).toBe(3);
});