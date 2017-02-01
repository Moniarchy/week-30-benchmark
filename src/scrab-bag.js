### 2: Scrab-Bag

Scrabble (the game in which players remove tiles with letters on them from a bag and use them to create words on the game board) has a set number of 100 tiles.

This number does not change between games, nor does the frequency of each letter.

[Frequency and point value of each tile.](http://scrabblewizard.com/scrabble-tile-distribution/)

Represent each tile by the letter that appears on it, and blank tiles by underscores (`_`).

**Input:**

An uppercase string with the tiles that have already been played.

E.g., if 14 tiles have been played, you would be given an input like this:

```
AERETOXMYCNS_B
```

**Output:**

```
10: E
9: I
8: A
7: O
5: R, N, T
4: U, L, D
3: G, S
2: P, H, F, V, W
1: B, Y, J, K, M, Q, C, Z, _
0: X
```

//record how many of each letter there are in the bag
//parse the string, perhaps iterating through it?
//count how many of each character are found in the string
//subtract that from how many of each letter there were in the bag
//match up the number/letter pairs and console.log them
