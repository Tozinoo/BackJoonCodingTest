package main

import (
	"bufio"
	"fmt"
	"os"
)

var reader3 *bufio.Reader = bufio.NewReader(os.Stdin)
var writer3 *bufio.Writer = bufio.NewWriter(os.Stdout)

func Main11021() {
	defer writer3.Flush()
	var T int
	fmt.Fscan(reader3, &T)

	for i := 1; i <= T; i++ {
		var A, B int
		fmt.Fscan(reader3, &A, &B)
		fmt.Fprintf(writer3, "Case #%d: %d\n", i, A+B)
	}

}
