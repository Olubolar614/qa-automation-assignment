Feature: Crew member application form tests

  Scenario Outline: Check if crew member application form returns correct results

    Given I am on the crew member application form page
    When I enter the input values for <name> and <city> within the form page
    And I submit the form
    Then I should see the correct crew member application information <crewmemberinfo> 

    Examples:
      | name      | city        | crewmemberinfo      |
      | "linda"   | "liverpool" | "linda riuz"        | 
      | ""        | "cardiff"   | "cardiff"           | 
      | "ju"      | "sheffield" | "julia cunningham"  | 
      | "gonzalez"| ""          | "hereford"          | 
          



  









