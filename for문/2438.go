package main

import (
	"bufio"
	"fmt"
	"os"
)

func Main2438() {
	var reader2438 *bufio.Reader = bufio.NewReader(os.Stdin)
	var writer2438 *bufio.Writer = bufio.NewWriter(os.Stdout)

	defer writer2438.Flush()

	var N int
	fmt.Fscan(reader2438, &N)
	var print string
	for i := 1; i <= N; i++ {
		print += "*"
		fmt.Fprintln(writer2438, print)
	}
}
