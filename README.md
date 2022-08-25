# TestCafe
# Automate Web and API using Testcafe

## Prerequisite

- Run npm install to install/update dependencies <pre> npm install </pre>.

## Running the E2E tests

Application uses testcafe framework to run E2E tests.

### On Local: Execute the following:

- Navigate to project root directory

```
npm run test:chrome
```

### In Pipeline: Follow below steps:
1. Go to repository: [https://github.com/DhanshreeBorase/WebAndApiAutomation].
2. Click on Actions tab.
3. Under `All workflows`, click on `Web-and-API tests` workflow.
4. Click on `Run Workflow` from right pane.
5. From the popup select the branch we need to run the workflow against. We only have one `main` branch and is selected by default.
6. Click on `Run Workflow`.

- Click on the scheduled workflow run from the list to see the progress.

## Running the E2E tests

- Test results link to __Calliope.pro__: [https://app.calliope.pro/reports/143980/public/25f43e38-cd4b-4312-bc48-6b29af27003b].

## Improvement point and new feature for the Calliope.pro platform

- Improvement: I tried accessing the shared report from mobile and the UI looked broken. I was not able to navigate to all test runs, and close button on the pop-up was also not working. The problem could be OS and device specific but is something which can be looked into.

- New Feature: When I was tring to share the report, I was looking for a way to share all reports inside a `Test Profile` so that I do not have to share test runs multiple times. I am not sure if this feature is already there and I missed it, but could be of added value.


## Scenario selection, approach and importance :

- For API, I selected to test `Users` api. As the endpoint is for most used entity across systems.
- If a system is created around user its important to make sure the endpoints are working as expected.

- For WEB, I selected pages for `Dynamic ID`, `Load Delay`, `Sample App` and `Hidden Buttons`. 
- These pages were combination of some basic but critical UI flows for example login flow and load delay. There can be different load time  of different pages across application, so its important to have tests written considering the accepted threshold delay.
- Dynamic Id was a pick for a scenario where element can not be selected by basic selectors like `id` or `class` and should be selected based on its text or relativity to other elements in DOM.
- Hidden buttons was challenging because it requires tests to be written not only based on what is rendered but also what is visible to     Human eye.

## Next Steps:

- Next steps could to add more web and api automated cases.
- In actual project it can be mapped to reach 100% of code coverage.






