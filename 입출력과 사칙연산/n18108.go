package main

import (
	"bufio"
	"fmt"
	"os"
)

func main18108() {
	r := bufio.NewReader(os.Stdin)
	w := bufio.NewWriter(os.Stdout)

	defer w.Flush()

	var A int

	fmt.Fscan(r, &A)

	fmt.Fprintln(w, A-543)
}
