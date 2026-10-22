import { expect, it } from "vitest";
import { jason } from "./index.js";

it("Formats correctly.", () => {
  const data = `
    {
      "name":    "Jason",



      "age": "25"
    }`;

  const expectedResult = `{
  "name": "Jason",
  "age": "25"
}
`;

  const result = jason(data);

  expect(result).toEqual(expectedResult);
});

it("Respects config.", () => {
  const data = `{"nick":9}`;

  expect(jason(data)).not.toEqual(jason(data, { tabs: 4 }));
});
