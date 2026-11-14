import { describe, expect, it } from "vitest";

import { CHECKOUT_URL, HAS_7_DAY_GUARANTEE, ORIGINAL_PRICE, PRICE } from "@/config/site";

describe("Sales page configuration", () => {
  it("uses the checkout selected for the buy button", () => {
    expect(CHECKOUT_URL).toBe("https://pay.kiwify.com.br/AkqU2HZ");
  });

  it("shows the offer price as R$ 27,00", () => {
    expect(PRICE).toBe("27,00");
  });

  it("shows the crossed-out original price as R$ 97,00", () => {
    expect(ORIGINAL_PRICE).toBe("97,00");
  });

  it("states the 7-day guarantee shown under the buy button", () => {
    expect(HAS_7_DAY_GUARANTEE).toBe(true);
  });
});
