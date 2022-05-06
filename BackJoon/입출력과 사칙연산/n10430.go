package main

import (
	"bufio"
	"fmt"
	"os"
)

func main10430() {
	r := bufio.NewReader(os.Stdin)
	w := bufio.NewWriter(os.Stdout)

	defer w.Flush()

	var A, B, C int

	fmt.Fscan(r, &A, &B, &C)

	fmt.Fprintln(w, (A+B)%C)
	fmt.Fprintln(w, ((A%C)+(B%C))%C)
	fmt.Fprintln(w, (A*B)%C)
	fmt.Fprintln(w, ((A%C)*(B%C))%C)
}
