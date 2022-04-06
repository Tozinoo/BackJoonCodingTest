package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
)

func main() {
	var reader *bufio.Reader = bufio.NewReader(os.Stdin)
	var writer *bufio.Writer = bufio.NewWriter(os.Stdout)

	defer writer.Flush()

	var N int
	fmt.Fscan(reader, &N)
	var array = make([]int, N)

	for i := 0; i < N; i++ {
		fmt.Fscan(reader, &array[i])
	}

	sort.Slice(array, func(i, j int) bool {
		return array[i] < array[j]
	})

	fmt.Fprintf(writer, "%d %d", array[0], array[N-1])

}

// for i := 0; i < len(array); i++ {
// 	for j := 0; j < len(array)-1; j++ {
// 		if array[j] > array[j+1] {
// 			var temp int = array[j]
// 			array[j] = array[j+1]
// 			array[j+1] = temp
// 		}
// 	}
// }
