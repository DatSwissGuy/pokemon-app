/**
 * This helper function returns the last entry of an array of strings with a conjunction word. Example:
 * Assuming an array of strings arr = ['One', 'Two', 'Three', 'Four'] with the conjunction word 'AND'
 * the function returns 'One, Two, Three AND Four'
 *
 * @param list The array containing strings
 * @param conjunction The word you want to use as conjunction
 */

export function joinWithConjunctionWord(list: string[], conjunction: string): string {
  const last = list.pop();
  return `${list.join(', ')} ${conjunction} ${last}`;
}
