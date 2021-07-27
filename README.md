# testcafe-reporter-allure-extended 

An [Allure](https://allure.qatools.ru/) reporter plugin for [TestCafé](https://devexpress.github.io/testcafe/).

## Documentation

A brief documentation to get up and running with this reporter

### Installation

Install with npm:

````sh
npm install --save-dev testcafe-reporter-allure-extended
````

### Configuration

#### TestCafé

When you run tests from the command-line, specify the reporter name by using the `--reporter` flag:

```console
testcafe chrome 'path/to/test/file.js' --reporter allure-extended
```

When you use API, pass the reporter name to the `reporter()` method:

```js
testCafe
    .createRunner()
    .src('path/to/test/file.js')
    .browsers('chrome')
    .reporter('allure-extended') // <-
    .run();
```

When using a general configuration file for TestCafe, use the `reporter` attribute:

```json
{
    ...
    "reporter": {
        "name": "allure-extended"
    },
    ...
}
```

#### Allure

`testcafe-reporter-allure-extended` 

```js
module.exports = {
  REPORTER_CONFIG_FILE: './allure.config.js',
  CATEGORIES_CONFIG_FILE: './allure-categories.config.js',

  RESULT_DIR: './allure/allure-results',
  REPORT_DIR: './allure/allure-report',
  SCREENSHOT_DIR: './allure/screenshots',

  CLEAN_RESULT_DIR: true,
  CLEAN_REPORT_DIR: true,
  CLEAN_SCREENSHOT_DIR: true,

  ENABLE_SCREENSHOTS: true,
  ENABLE_QUARANTINE: false,
  ENABLE_LOGGING: false,
  CONCURRENCY: 1,

  META: {
    SEVERITY: 'Normal',
    PRIORITY: 'Medium',
    JIRA_URL: 'https://jira.example.nl/browse/',
  },
  LABEL: {
    ISSUE: 'JIRA Test Case',
    EPIC: 'JIRA Epic',
    STORY: 'JIRA User Story',
    FLAKY: 'Flaky test',
    SCREENSHOT_MANUAL: 'Screenshot taken manually',
    SCREENSHOT_ON_FAIL: 'Screenshot taken on fail',
    DEFAULT_STEP_NAME: 'Test Step',
  },
};
```

And, the defaults for `allure-categories.config.js` are the following:

```js
module.exports = [
  {
    name: 'Ignored tests',
    matchedStatuses: [Status.SKIPPED],
  },
  {
    name: 'Product defects',
    matchedStatuses: [Status.FAILED],
    messageRegex: '.*Assertion failed.*',
  },
  {
    name: 'Test defects',
    matchedStatuses: [Status.FAILED],
  },
  {
    name: 'Warnings',
    matchedStatuses: [Status.PASSED],
    messageRegex: '.*Warning.*',
  },
  {
    name: 'Flaky tests',
    matchedStatuses: [Status.PASSED, Status.FAILED],
    messageRegex: '.*Flaky.*',
  },
];
```

### Metadata

Metadata can be added to a test using the `meta()` function. The metadata can be added to both `test` and `fixture`

Metadata added to the `fixture` will be inherited by all tests coupled in that fixture to avoid declaring metadata that is the same for all tests within the fixture multiple times.

This is a general example of the metadata added:

```typescript
test.meta({
  severity: Severity.TRIVIAL,
  issue: 'TEST-ISSUE',
  description: 'An example discription',
  epic: 'Example Epic Ticket',
  feature: 'Example Feature Ticket',
  story: 'Example Story Ticket',
  suite: 'Main Example Group',
  // ... any other key: value property as custom metadata
})('Example test with metadata', async (t) => {
  // Test Code
});
```

### Steps

With this reporter, `test-steps` can be defined to split a `test` into multiple step. The step function expects three values: the step name, the `TestController` and the actions taken within the step as a `TestControllerPromise`.

````typescript
import step from 'testcafe-reporter-allure-plus/dist/utils';

test("Example test with steps", async t => {
  await step("Add developer name to form", t, 
    t.typeText("#developer-name", "Jhon Smith")
  );
  await step("Submit form and check result", t,
    t.click("#submit-button")
      .expect(Selector("#article-header").innerText)
      .eql("Thank you, John Smith!")
  );
})
````

## License
As we are basing our modifications on Isaac's work, our License as of yet would be [MIT](https://github.com/isaaceindhoven/testcafe-reporter-allure/blob/master/LICENSE)