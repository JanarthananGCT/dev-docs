/**
 * This is a placeholder implementation for the site-storage module.
 * It provides basic storage functionality that Docusaurus expects.
 */

'use strict';

// Simple in-memory storage implementation
const memoryStorage = new Map();

// Export the storage interface that Docusaurus expects
module.exports = {
  save: (key, value) => {
    memoryStorage.set(key, value);
    return Promise.resolve();
  },
  get: (key) => {
    return Promise.resolve(memoryStorage.get(key));
  },
  remove: (key) => {
    memoryStorage.delete(key);
    return Promise.resolve();
  },
  getAll: () => {
    const entries = {};
    memoryStorage.forEach((value, key) => {
      entries[key] = value;
    });
    return Promise.resolve(entries);
  },
  // Add any other methods that might be expected by Docusaurus
}; 