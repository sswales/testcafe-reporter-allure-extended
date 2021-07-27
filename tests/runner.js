/* eslint-disable no-console */
import createTestCafe from 'testcafe';
/* eslint-disable-next-line import/no-unresolved */
import * as allureReporter from '../dist/index.js';

let testcafe = null;

createTestCafe()
  .then((tc) => {
    testcafe = tc;
    const runner = testcafe.createRunner();
    const browsers = process.env.TESTCAFE_BROWSER || 'chrome:headless';

    return runner
      .src(['tests/e2e/*.ts'])
      .browsers(browsers)
      .reporter(allureReporter)
      .tsConfigPath('tsconfig.test.json');
  })
  .then((failed) => {
    testcafe.close();

    if (failed > 0) {
      throw new Error(`TestCafé tests failed: ${failed}`);
    }
  })
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  .catch((error) => {
    testcafe.close();
    console.log(error);
    // throw error;
  });
