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

	var A, B, C, h, m int

	fmt.Fscan(r, &A, &B, &C)
	h = C / 60
	m = C % 60

	if m+B >= 60 {
		h++
		if A+h > 23 {
			fmt.Fprintln(w, A+h-24, m+B-60)
		} else {
			fmt.Fprintln(w, A+h, m+B-60)
		}
	} else {
		if A+h > 23 {
			fmt.Fprintln(w, A+h-24, m+B)
		} else {
			fmt.Fprintln(w, A+h, m+B)
		}
	}
}
