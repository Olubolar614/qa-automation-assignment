const { client } = require("cypress-api");
const { Given, When, Then } = require("cucumber");

var crewApplicationForm = client.page.CrewApplicationForm();

const DEFAULT_WAIT_TIME = 2000;

Given("I am on the crew member application form page", function () {
  return crewApplicationForm
    .navigate()
    .waitForElementVisible("body", DEFAULT_WAIT_TIME);
});

When(
  "I enter the input values for {string} and {string} within the form page",
  function (name, city) {
    return crewApplicationForm
      .setValue("@name", name)
      .setValue("@city", city)
  }
);

When("I submit the form", function () {
  return crewApplicationForm.submitToolForm("@submit");
});

Then(
  "I should see the correct crew member application information {string}",
  function(crewmemberinfo) {
    return crewApplicationForm
      .waitForElementVisible("@containerBox", DEFAULT_WAIT_TIME)
      .assert.containsText("@containerBox", crewmemberinfo);
  });

Then("I should see correct number of error messages", function () {
  return crewApplicationForm
    .waitForElementVisible(
      crewApplicationForm.elements.errorMessages.selector,
      DEFAULT_WAIT_TIME
    )
    .assert.elementCount(
      crewApplicationForm.elements.errorMessages.selector,
      1
    );
});


