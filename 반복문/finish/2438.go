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

	var N int

	fmt.Fscan(r, &N)

	for i := 1; i <= N; i++ {
		for j := i; j < N; j++ {
			fmt.Fprint(w, " ")
		}
		for k := 0; k < i; k++ {
			fmt.Fprint(w, "*")
		}
		fmt.Fprintln(w)
	}
}
