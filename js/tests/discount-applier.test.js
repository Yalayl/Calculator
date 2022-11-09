const test = require("tape");
const DiscountApplier = require("../discount-applier");
const Notifier = require("../notifier");
test("apply v1", (t) => {
  // TODO: write a test that fails due to the bug in
  //Given
  const notifier = new Notifier();
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
  t.ok(notifier.usersNotified.length === expected.length);
  t.end();
});

test("apply v2", (t) => {
  // TODO: write a test that fails due to the bug in
  const notifier = new Notifier();
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

  console.log(notifier.usersNotified, "notifier.usersNotified");
  console.log(expected, "expected");
  t.ok(
    expected.every(
      (element) =>
        notifier.usersNotified.find(
          (userNotified) => element.user == userNotified.user
        ) !== undefined
    )
  );
  t.end();
});
