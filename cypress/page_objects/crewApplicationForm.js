var util = require("util");

module.exports = {
  url: function() {
    return "http://localhost:5000";
  },
  elements: {
    name: {
      selector: 'input[id="name"]',
    },
    city: {
      selector: 'input[id="city"]',
    },
    submit: {
      selector: ".button",
    },
    containerBox: {
      selector: ".CrewMember-container",
    },
    errorMessages: {
      selector: ".error-message",
    },
  },
  commands: [
    {
      submitToolForm: function(selector) {
        return this.click(selector);
      },
      setRadioButtonValue: function(element, data) {
        var radioButton = util.format(element, data);
        return this.click(radioButton);
      },
      setDropdownValue: function(parent, element, data) {
        var dropdown = util.format(element, data);
        return this.click(parent)
          .waitForElementVisible(dropdown, 3000)
          .click(dropdown);
      },
      clearInputs: function(selector) {
        const { RIGHT_ARROW, BACK_SPACE } = this.api.Keys;
        return this.getValue(selector, result => {
          const chars = result.value.split("");
          // Make sure we are at the end of the input
          chars.forEach(() => this.setValue(selector, RIGHT_ARROW));
          // Delete all the existing characters
          chars.forEach(() => this.setValue(selector, BACK_SPACE));
        });
      }
    }
  ]
};