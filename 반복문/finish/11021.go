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

	var A, B, C int

	fmt.Fscan(r, &A)

	for i := 1; i <= A; i++ {
		fmt.Fscan(r, &B, &C)
		fmt.Fprintf(w, "Case #%d: %d\n", i, B+C)
	}

}
