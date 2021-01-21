/**
 * Returns word as uppercase. Useful for names or nouns.
 * @param word you want to convert to uppercase
 */

export function wordToUpperCase(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
