/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors) {
  const n = colors.length;
  if (n < 3) return 0;

  let alternating_groups = 0;
  const loop_colors = [].concat(
    colors.slice(n - 1, n),
    ...colors,
    colors.slice(0, 1)
  );

  for (let i = 2; i < loop_colors.length; i++) {
    if (
      loop_colors[i - 2] === loop_colors[i] &&
      loop_colors[i - 1] !== loop_colors[i]
    ) {
      alternating_groups++;
    }
  }

  return alternating_groups;
};

colors = [0, 1, 0, 0, 1];

console.log(numberOfAlternatingGroups(colors)); // 1
