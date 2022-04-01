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

	var A, B, C, sum int

	fmt.Fscan(r, &A, &B, &C)

	if A == B && B == C {
		sum = 10000 + A*1000
	} else if A == B {
		sum = 1000 + A*100
	} else if B == C {
		sum = 1000 + B*100
	} else if A == C {
		sum = 1000 + A*100
	} else {
		if A > B && B < C {
			sum = A * 100
		} else if B > C {
			sum = B * 100
		} else {
			sum = C * 100
		}
	}
	fmt.Fprintln(w, sum)
}
