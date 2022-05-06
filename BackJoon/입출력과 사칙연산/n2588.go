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

	fmt.Fprintln(w, (B%10)*A)
	fmt.Fprintln(w, ((B%100)-(B%10))/10*A)
	fmt.Fprintln(w, ((B%1000)-(B%100))/100*A)
	fmt.Fprintln(w, A*B)
}
