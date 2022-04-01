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

	var A int

	fmt.Fscan(r, &A)

	for i := A; i >= 1; i-- {
		fmt.Fprintln(w, i)
	}
}
