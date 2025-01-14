# React Native FlatList/SectionList: Non-unique keys in keyExtractor

This repository demonstrates a common yet subtle bug in React Native's FlatList and SectionList components: using a `keyExtractor` function that doesn't generate unique keys for each item.  This can cause unpredictable rendering issues and performance problems.

## The Bug

The `bug.js` file shows a FlatList with duplicate keys. This can lead to items not rendering correctly or being incorrectly updated.  The issue is silently handled by React Native, making it difficult to debug.

## The Solution

The `bugSolution.js` file demonstrates the correct way to use the `keyExtractor`, ensuring each item has a unique key.  The solution uses the item's index as a fallback when a unique ID is unavailable.  Alternatively, you could use a unique UUID library for more robust key generation.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app using your preferred React Native method.
4. Observe the incorrect behavior in `bug.js` and the correct behavior in `bugSolution.js`.

## Lessons Learned

- Always ensure your `keyExtractor` generates unique keys.
- When in doubt, use a library like `uuid` to guarantee unique IDs.
- Consider using the item index as a fallback in the keyExtractor, but make sure your data is stable.