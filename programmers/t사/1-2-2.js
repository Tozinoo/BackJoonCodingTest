const maxAreaOfIsland = (grids) => {
  let grid = [];

  grids.map((line) => {
    grid.push(String(line).split(""));
  });
  let maxArea = 0;

  console.log(grid.length);

  const mapIsland = (i, j) => {
    const stack = [[i, j]];
    let islandSize = 0;

    const directions = [
      [-1, 0],
      [1, 0],
      [0, 1],
      [0, -1],
    ];

    while (stack.length > 0) {
      const tile = stack.pop();
      islandSize++;

      for (const dir of directions) {
        let nextRow = tile[0] + dir[0];
        let nextCol = tile[1] + dir[1];
        if (
          grid[nextRow] &&
          grid[nextRow][nextCol] &&
          grid[nextRow][nextCol] === 1
        ) {
          grid[nextRow][nextCol] = 3;
          stack.push([nextRow, nextCol]);
        }
      }
    }
    return islandSize;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        grid[i][j] = 3;
        maxArea = Math.max(maxArea, mapIsland(i, j));
      }
    }
  }
  return maxArea;
};

let arr = [
  ["1101110000"],
  ["1100001000"],
  ["1000011000"],
  ["0000000000"],
  ["0000100100"],
  ["1110101111"],
];

console.log(maxAreaOfIsland(arr));
