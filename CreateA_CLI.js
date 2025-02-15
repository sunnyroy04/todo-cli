#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Get the file path from command line arguments
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("Usage: node wordCount.js <file_path>");
  process.exit(1);
}

const filePath = path.resolve(args[0]);

try {
  // Read file synchronously with utf-8 encoding
  const contents = fs.readFileSync(filePath, "utf-8");

  // Split the content into words using regex (handles multiple spaces and newlines)
  const words = contents.split(/\s+/).filter(word => word.length > 0);

  // Print the word count
  console.log(`Word Count: ${words.length}`);
} catch (err) {
  console.error("Error reading the file:", err.message);
}
  