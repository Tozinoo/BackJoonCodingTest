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

	if B < 45 {
		if A == 0 {
			fmt.Fprintln(w, 23, B-45+60)
		} else {
			fmt.Fprintln(w, A-1, B-45+60)
		}
	} else {
		fmt.Fprintln(w, A, B-45)
	}

}
