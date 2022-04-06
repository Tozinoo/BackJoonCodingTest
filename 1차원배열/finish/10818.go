package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	r := bufio.NewReader(os.Stdin)
	w := bufio.NewWriter(os.Stdout)

	defer w.Flush()

	var N, inputN int

	fmt.Fscan(r, &N)

	arrayN := make([]int, N)

	for i := 0; i < N; i++ {
		fmt.Fscan(r, &inputN)
		arrayN[i] = inputN
	}

	for i := 0; i < len(arrayN); i++ {
		for j := 0; j < len(arrayN)-1; j++ {
			var temp int
			if arrayN[j] > arrayN[j+1] {
				temp = arrayN[j]
				arrayN[j] = arrayN[j+1]
				arrayN[j+1] = temp
			}
		}
	}

	fmt.Fprintln(w, arrayN[0], arrayN[N-1])
}
