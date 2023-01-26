import deepmerge from "deepmerge";

import { JSONValue } from "../../src/types";

export function segmentTrackEvent(
  overrides: Record<string, JSONValue>
): Record<string, JSONValue> {
  return deepmerge(
    {
      anonymousId: "23adfd82-aa0f-45a7-a756-24f2a7a4c895",
      context: {
        library: {
          name: "analytics.js",
          version: "2.11.1",
        },
        page: {
          path: "/academy/",
          referrer: "",
          search: "",
          title: "Analytics Academy",
          url: "https://segment.com/academy/",
        },
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36",
        ip: "108.0.78.21",
      },
      event: "Course Clicked",
      integrations: {},
      messageId: "ajs-f8ca1e4de5024d9430b3928bd8ac6b96",
      properties: {
        title: "Intro to Analytics",
      },
      receivedAt: "2015-12-12T19:11:01.266Z",
      sentAt: "2015-12-12T19:11:01.169Z",
      timestamp: "2015-12-12T19:11:01.249Z",
      type: "track",
      userId: "AiUGstSDIg",
      originalTimestamp: "2015-12-12T19:11:01.152Z",
    },
    overrides
  );
}

export function segmentIdentifyEvent(
  overrides: Record<string, JSONValue> = {}
): Record<string, JSONValue> {
  return deepmerge(
    {
      anonymousId: "507f191e810c19729de860ea",
      channel: "browser",
      context: {
        ip: "8.8.8.8",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36",
      },
      integrations: {
        All: false,
        Mixpanel: true,
        Salesforce: true,
      },
      messageId: "022bb90c-bbac-11e4-8dfc-aa07a5b093db",
      receivedAt: "2015-02-23T22:28:55.387Z",
      sentAt: "2015-02-23T22:28:55.111Z",
      timestamp: "2015-02-23T22:28:55.111Z",
      traits: {
        name: "Peter Gibbons",
        email: "peter@example.com",
        plan: "premium",
        logins: 5,
        address: {
          street: "6th St",
          city: "San Francisco",
          state: "CA",
          postalCode: "94103",
          country: "USA",
        },
      },
      type: "identify",
      userId: "97980cfea0067",
      version: "1.1",
    },
    overrides
  );
}
