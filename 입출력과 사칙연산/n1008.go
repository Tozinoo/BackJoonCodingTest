package main

import (
	"bufio"
	"fmt"
	"os"
)

func main1008() {
	var reader *bufio.Reader = bufio.NewReader(os.Stdin)
	var writer *bufio.Writer = bufio.NewWriter(os.Stdout)

	defer writer.Flush()

	var A, B float64

	fmt.Fscan(reader, &A, &B)
	fmt.Fprint(writer, A/B)
}
