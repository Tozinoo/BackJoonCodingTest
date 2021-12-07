package main

import (
	"bufio"
	"fmt"
	"os"
)

var reader2 *bufio.Reader = bufio.NewReader(os.Stdin)
var writer2 *bufio.Writer = bufio.NewWriter(os.Stdout)

func Main2742() {
	defer writer2.Flush()

	var input int
	fmt.Fscan(reader2, &input)

	for i := input; i > 0; i-- {
		fmt.Fprintln(writer2, i)
	}
}
