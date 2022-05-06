package main

import (
	"bufio"
	"fmt"
	"os"
)

var reader *bufio.Reader = bufio.NewReader(os.Stdin)
var writer *bufio.Writer = bufio.NewWriter(os.Stdout)

func main() {
	defer writer.Flush()
	var N, X int
	fmt.Fscan(reader, &N, &X)

	for i := 0; i < N; i++ {
		var A int
		fmt.Fscan(reader, &A)
		if X > A {
			fmt.Fprintf(writer, "%d ", A)
		}
	}

}
