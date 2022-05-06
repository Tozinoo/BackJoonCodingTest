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

	if A < B {
		fmt.Fprintln(w, "<")
	} else if A > B {
		fmt.Fprintln(w, ">")
	} else if A == B {
		fmt.Fprintln(w, "==")
	}
}
