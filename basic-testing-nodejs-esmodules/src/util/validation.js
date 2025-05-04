export function validateStringNotEmpty(value) {
  if (value.trim().length === 0 || typeof value !== "string") {
    throw new Error("Invalid input - must not be empty.");
  }
}

export function validateNumber(value) {
  if (isNaN(value) || typeof value !== "number") {
    throw new Error("Invalid number input.");
  }
}
