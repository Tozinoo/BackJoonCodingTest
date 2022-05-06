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

	var A, B int

	fmt.Fscan(r, &A, &B)

	if A > 0 {
		if B < 0 {
			fmt.Fprintln(w, 4)
		} else {
			fmt.Fprintln(w, 1)

		}

	} else {
		if B < 0 {
			fmt.Fprintln(w, 3)
		} else {
			fmt.Fprintln(w, 2)

		}
	}

}
