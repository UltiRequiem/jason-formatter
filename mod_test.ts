import { jason } from "./mod.ts";

import {
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std@0.133.0/testing/asserts.ts";

Deno.test("Formats correctly.", () => {
  const data = `
    {
      "name":    "Jason",



      "age": "25"
    }`;

  const expectedResult = `{
  "name": "Jason",
  "age": "25"
}`;

  const result = jason(data);

  assertEquals(result, expectedResult);
});

Deno.test("Respects config.", () => {
  const data = `{"nick":9}`;

  assertNotEquals(jason(data), jason(data, { tabs: 4 }));
});
