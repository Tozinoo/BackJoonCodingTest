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

	var A int = 1
	var B int = 1

	for A != 0 && B != 0 {
		fmt.Fscan(r, &A, &B)
		if A+B != 0 {
			fmt.Fprintln(w, A+B)
		}
	}
}
