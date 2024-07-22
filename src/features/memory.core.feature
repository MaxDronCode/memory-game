Feature: Memory

    As a player:
    - I want to be able to play a memory game
    - So I want to uncover cards until I find all the matching pairs.

    How to refer to a card:
    - Using (row, column) coordinates
    - Rows and columns starts from 1

    How to load mock data:
    - Using <ctrl>+m key combination to discover the load mock data form

    To define the card we'll use:
    - [1-6] to determine to which pair the card belongs

    This is the way to define the mock data:
    | 1 | 2 | 3 | 4 |
    | 1 | 5 | 6 | 6 |
    | 5 | 3 | 2 | 4 |

    To define the board display will use:
    COVERED CARDS
    "X" Card is covered
    UNCOVERED CARDS
    "1" Card belongs to pair 1
    "2" Card belongs to pair 2
    "3" Card belongs to pair 3
    "4" Card belongs to pair 4
    "5" Card belongs to pair 5
    "6" Card belongs to pair 6

    Game example: https://marina-ferreira.github.io/projects/js/memory-game/

    Background: 
      Given the player opens the game

    Scenario: Starting the Game - Grid default size 3x4
      Then the grid should have "3" rows and "4" columns

    Scenario: Starting the Game - All cards should be covered
      Then all the cards should be covered

    Scenario: Starting the Game - All the cards should be enabled
      Then all the cards should be enabled
    
    Scenario: Uncovering a card with the mouse - Using mouse left click
      Given the player loads the following mock data:
      """
      | 1 |
      """
      When the player clicks the card at (1, 1)
      Then the card at (1, 1) should be uncovered
    
    Scenario: Uncovering a card - Disabling the card
      Given the player loads the following mock data:
      """
      | 1 |
      """
      When the player uncovers the card at (1, 1)
      Then the card at (1, 1) should be disabled

     Scenario: Uncovering a wrong pair - They become covered again
      Given the player loads the following mock data:
      """
      | 1 | 2 |
      """
      When the player uncovers the card at (1, 1)
      And the player uncovers the card at (1, 2)
      Then the card at (1, 1) should be covered
      And the card at (1, 2) should be covered

    Scenario: Uncovering a correct pair - They remain uncovered
      Given the player loads the following mock data:
      """
      | 1 | 1 |
      """
      When the player uncovers the card at (1, 1)
      And the player uncovers the card at (1, 2)
      Then the card at (1, 1) should be uncovered
      And the card at (1, 2) should be uncovered
    
    Scenario: Uncovering all pairs - The game should be over
      Given the player loads the following mock data:
      """
      | 1 | 1 |
      | 2 | 2 |
      """
      When the player uncovers the card at (1, 1)
      And the player uncovers the card at (1, 2)
      And the player uncovers the card at (2, 1)
      And the player uncovers the card at (2, 2)
      Then the game should be over
    
    
 

    