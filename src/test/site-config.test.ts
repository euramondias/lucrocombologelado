import { describe, expect, it } from "vitest";

import { CHECKOUT_URL } from "@/config/site";

describe("Sales page configuration", () => {
  it("uses the checkout selected for the buy button", () => {
    expect(CHECKOUT_URL).toBe("https://pay.kiwify.com.br/jKqrmAz");
  });
});
