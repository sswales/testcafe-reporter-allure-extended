# Metadata

Metadata can be added to a test by using the `meta()` function. The metadata can be added to both the `test` and the `fixture`.

Metadata added to a `fixture` will be inherited by all tests coupled to that fixture to avoid having to declare metadata that is the same for all tests within the fixture multiple times. 

```js
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

## Pré-defined metadata

| Metadata | Description |
| ------------- | ------------- |
| Severity | The severity values are dictated by the [allure-js-commons](https://github.com/allure-framework/allure-js/tree/master/packages/allure-js-commons) package, these values are: `blocker, critical, normal, minor, trivial`;  |
| Issue  | A Jira Issue can be coupled to a test, creating a link within the Allure Report to the Jira Issue page. The URL to the Jira page can be set in the [allure-js-commons](https://github.com/sswales/testcafe-reporter-allure#configuration).  |
| Epic, Feature, Story  | To sort the tests based on the `epic`, `feature`, and/or `story`, these metadata options can be used to form a tree structure. The tree is structured as follows: An epic can have multiple features, a feature can have multiple stories, and a story can have multiple tests. |
| Suite  | Within the Allure Report, the tests are organized by `fixture` by default. For a more expansive organization of the tests and fixtures, the `suite` parameter can be set. When the `suite` parameter is set within a `test`, a subcategory is created within the `fixture` that will group all tests that have the same `suite` parameter together. When the `suite` parameter is set within a `fixture`, a parent category is created that will group multiple fixtures that have the same `suite` parameter.  |

## Custom metadata

It is also possible to add custom metadata to a `test`. These will be added as parameters to the Allure Report. These parameters do __NOT__ have to be named otherMeta but do require to be a key-value pair of two strings. For example, adding a color parameter to a test: `color: 'black'` will result in `color: black` be added to the final Allure Report.

## Result
![Example of the metadata code shown below.](/images/metadata.PNG)