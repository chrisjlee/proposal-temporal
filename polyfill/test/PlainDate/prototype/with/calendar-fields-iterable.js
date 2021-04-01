// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.with
info: |
    sec-temporal.plaindate.prototype.with step 9:
      9. Let _fieldNames_ be ? CalendarFields(calendar, « *"day"*, *"month"*, *"monthCode"*, *"year"* »).
    sec-temporal-calendarfields step 4:
      4. Let _result_ be ? IterableToList(_fieldsArray_).
includes: [compareArray.js, temporalHelpers.js]
---*/

const expected = [
  "day",
  "month",
  "monthCode",
  "year",
];

const calendar = TemporalHelpers.calendarFieldsIterable();
const date = new Temporal.PlainDate(2000, 5, 2, calendar);
date.with({ year: 2005 });

assert.compareArray(calendar.fieldsCalledWith, expected, "fields() method called with correct args");
assert.sameValue(calendar.iteratorExhausted, true, "iterated through the whole iterable");
