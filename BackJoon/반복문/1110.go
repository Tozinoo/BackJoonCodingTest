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
	var N, newN, newLN, res, result int
	var count int = 1

	fmt.Fscan(r, &N)
	result = N
	for {
		newLN = N/10 + N%10
		if newLN >= 10 {
			newLN = newLN % 10
		}

		res = (N%10)*10 + newLN

		newN = res
		if result == newN {
			break
		}
		N = res
		count++
	}
	fmt.Fprint(w, count)
}
