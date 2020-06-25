/**
 * Sets displayGrid with random cells as alive
 * @param {array} setDisplayGrid
 * @param {int} rows
 * @param {int} cols
 */
export default function create_random_seed(rows, cols) {
  return Array(rows)
    .fill()
    .map(() =>
      Array(cols)
        .fill(0)
        .map(() => Math.floor(Math.random() * 2))
    );
}
