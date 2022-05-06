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

	var N, X, Y int

	fmt.Fscan(r, &N, &X)

	for i := 0; i < N; i++ {
		fmt.Fscan(r, &Y)
		if Y < X {
			fmt.Fprint(w, Y, " ")
		}
	}
}
