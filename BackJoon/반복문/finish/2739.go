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

	for i := 1; i < 10; i++ {
		fmt.Fprintf(w, "%d * %d = %d\n", A, i, A*i)
	}
}
