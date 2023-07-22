# Awesome repo

Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

"acb" --> "bca"
"aabacbaa" --> "bbabcabb"


## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Backlog

Story 1: User can pass string with one or more "c", it should return the same string
- ✅ DONE UAT 1.1: User can pass "c", it should return "c"
- ✅ DONE UAT 1.2: User can pass "ccc", it should return "ccc"

Story 2: User can pass string with two same letters, it should return the same string
- ✅ DONE UAT 2.1: User can pass "aa", it should return "bb"
- ✅ DONE UAT 2.2: User can pass "bb", it should return "aa"

Story 3: User can pass string with two different letters, it should return the string with switched letters
- ✅ DONE UAT 3.1: User can pass "ab", it should return "ba"
- ✅ DONE UAT 3.2: User can pass "ba", it should return "ab"

Story 4: User can pass string with many different letters a and b, it should return the string with switched letters
- ⚠ TODO UAT 4.1: User can pass "abab", it should return "baba"
- ⚠ TODO UAT 4.2: User can pass "bbbaaa", it should return "aaabbb"

Story 5: User can pass string with many different letters a,b,c, it should return the string with switched letters (c remain untouched)
- ⚠ TODO UAT 5.1: User can pass "abcab", it should return "bacba"
- ⚠ TODO UAT 5.2: User can pass "bbbaaca", it should return "aaabbcb"


Story 6: User can pass wrong input, it should throw an exception
- ⚠ TODO UAT 6.1: User can pass null, it should return an exception
- ⚠ TODO UAT 6.2: User can pass "", it should return an exception
- ⚠ TODO UAT 6.3: User can pass "rtk", it should return an exception