Feature: Implement cool UX.

  # Use ux design from folder documentation
  Scenario: Create new styles for pages with material.
    Given the pages home, character-details.
    When the layout is material.
    Then the layout ux for material is shown.

  # Use ux design from folder documentation
  Scenario: Create new styles for pages with primeng.
    Given the pages home, character-details.
    When the layout is primeng.
    Then the layout ux for primeng is shown.
