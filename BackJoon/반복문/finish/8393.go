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

	var A, sum int

	fmt.Fscan(r, &A)

	for i := 0; i <= A; i++ {
		sum += i
	}
	fmt.Fprintln(w, sum)
}
