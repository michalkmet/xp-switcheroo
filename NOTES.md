# Notes

Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'


## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

Pomodoro 1:
- ✅ Initial Refactor
- ✅ User Stories
- ✅ UAT 1.1: User can pass "c", it should return "c"
- ✅ UAT 1.2: User can pass "ccc", it should return "ccc"
- ✅ UAT 2.1: User can pass "aa", it should return "bb"
- ✅ UAT 2.2: User can pass "bb", it should return "aa"
- 🚧 UAT 3.1: User can pass "ab", it should return "ba"
- logic error in stories

Pomodoro 2:
- ✅ UAT 3.1: User can pass "ab", it should return "ba"

Pomodoro 3:
- ✅ UAT 3.2: User can pass "ba", it should return "ab"
- ✅ UAT 4.1: User can pass "abab", it should return "baba"
- ✅ UAT 4.2: User can pass "bbbaaa", it should return "aaabbb"
- ✅ UAT 5.1: User can pass "abcab", it should return "bacba"
- 🚧 UAT 5.2: User can pass "bbbaaca", it should return "aaabbcb"