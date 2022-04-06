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

	for {
		var A, B int
		fmt.Fscan(r, &A, &B)
		if A == 0 && B == 0 {
			break
		}
		fmt.Fprintln(w, A+B)
	}
}
