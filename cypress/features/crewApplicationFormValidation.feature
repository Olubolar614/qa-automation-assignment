Feature: Crew member application form page validation test

 Scenario: Check if crew member application form page returns error messages
    Given I am on the form page
    And I then submit the form
    Then I should see correct number of error messages                                                  |

