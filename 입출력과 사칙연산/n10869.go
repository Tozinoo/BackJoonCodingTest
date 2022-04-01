package main

import (
	"bufio"
	"fmt"
	"os"
)

func main10869() {
	var reader *bufio.Reader = bufio.NewReader(os.Stdin)
	var writer *bufio.Writer = bufio.NewWriter(os.Stdout)

	defer writer.Flush()

	var A string

	fmt.Fscan(reader, &A)
	fmt.Fprint(writer, A, "??!")
}
