package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	var reader *bufio.Reader = bufio.NewReader(os.Stdin)
	var writer *bufio.Writer = bufio.NewWriter(os.Stdout)
	defer writer.Flush()
	var A, B int
	for {
		value, _ := fmt.Fscan(reader, &A, &B)
		if value != 2 {
			break
		}
		fmt.Fprintln(writer, A+B)
	}
}
