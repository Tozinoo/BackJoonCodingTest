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

	if A%4 == 0 && A%100 != 0 || A%400 == 0 {
		fmt.Fprintln(w, 1)
	} else {
		fmt.Fprintln(w, 0)
	}

}
