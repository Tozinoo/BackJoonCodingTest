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

	if 90 <= A && A <= 100 {
		fmt.Fprintln(w, "A")
	} else if 80 <= A && A <= 89 {
		fmt.Fprintln(w, "B")
	} else if 70 <= A && A <= 79 {
		fmt.Fprintln(w, "C")
	} else if 60 <= A && A <= 69 {
		fmt.Fprintln(w, "D")
	} else {
		fmt.Fprintln(w, "F")
	}
}
