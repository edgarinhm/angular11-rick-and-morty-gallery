Feature: Implement the vertical scrollbar.

  # Use ux design from folder documentation
  Scenario: Create a vertical scrollbar.
    Given the grid charecter gallery pagination.
    When the pagination max-characters per page is reached.
    Then the other characters in next pagination are shown.
