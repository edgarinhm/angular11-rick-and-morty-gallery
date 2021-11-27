Feature: Implement a new character details page.

  # Use ux design from folder documentation
  Scenario: Create a deatail page for a charecter selection.
    Given the grid charecter gallery.
    When the character image as the event clic.
    Then the new page character details is shown.
