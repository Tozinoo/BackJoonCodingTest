package main

import (
	"bufio"
	"fmt"
	"os"
)

var reader1 *bufio.Reader = bufio.NewReader(os.Stdin)
var writer1 *bufio.Writer = bufio.NewWriter(os.Stdout)

func Main2741() {
	defer writer1.Flush()

	var input int
	fmt.Fscan(reader1, &input)

	for i := 1; i <= input; i++ {
		fmt.Fprintln(writer1, i)
	}
}
