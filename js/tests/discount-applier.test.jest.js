const DiscountApplier = require("../discount-applier");
const Notifier = require("../notifier");
test("apply v1", (t) => {
  // TODO: write a test that fails due to the bug in
  //Given
  const notifier = new Notifier();
  const spy = jest.spyOn(notifier, "notify").mockReturnValue(undefined);
  const discountApplier = new DiscountApplier(notifier);
  const discount = "25";
  const users = ["Adrien", "Dabi", "Kevin", "Loïc", "Lucas"];
  const expected = users.map((user) => ({
    user,
    message: `You've got a new discount of ${discount}`,
  }));

  //When
  discountApplier.applyV1(discount, users);
  //Then
  spy.toHaveBeenCalledTimes(users.length);
});

test("apply v2", (t) => {
  // TODO: write a test that fails due to the bug in
  const notifier = new Notifier();
  const spy = jest.spyOn(notifier, "notify").mockReturnValue(undefined);
  const discountApplier = new DiscountApplier(notifier);
  const discount = "25";
  const users = ["Adrien", "Dabi", "Kevin", "Loïc", "Lucas"];
  const expected = users.map((user) => ({
    user,
    message: `You've got a new discount of ${discount}`,
  }));

  //When
  discountApplier.applyV2(discount, users);
  //Then
  expected.forEach((index, element) => {
    spy.toHaveBeenNthCalledWith(index + 1, element);
  });
});
