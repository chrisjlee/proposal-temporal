// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.from
includes: [temporalHelpers.js]
---*/

TemporalHelpers.checkSubclassingIgnoredStatic(
  Temporal.Calendar,
  "from",
  ["iso8601"],
  (result) => {
    assert.sameValue(result.id, "iso8601", "id property of result");
    assert.sameValue(result.toString(), "iso8601", "toString() of result");
  },
);
