package main

import (
	"bufio"
	"fmt"
	"os"
)

var reader2439 *bufio.Reader = bufio.NewReader(os.Stdin)
var writer2439 *bufio.Writer = bufio.NewWriter(os.Stdout)

func Main2439() {
	defer writer2439.Flush()

	var N int
	fmt.Fscan(reader2439, &N)

	for i := 1; i <= N; i++ {
		for j := i; j < N; j++ {
			fmt.Fprint(writer2439, " ")
		}
		for k := 0; k < i; k++ {
			fmt.Fprint(writer2439, "*")
		}
		fmt.Fprintln(writer2439)
	}
}
