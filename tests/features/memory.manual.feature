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

    There are two ways to define the mock data:
    - Inline:
    "1234-1566-5342"
    - Table:
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

   