package main

import (
	"bufio"
	"fmt"
	"os"
)

func Main11022() {
	var reader *bufio.Reader = bufio.NewReader(os.Stdin)
	var writer *bufio.Writer = bufio.NewWriter(os.Stdout)
	defer writer.Flush()
	var T int
	fmt.Fscan(reader, &T)

	for i := 1; i <= T; i++ {
		var A, B int
		fmt.Fscan(reader, &A, &B)
		fmt.Fprintf(writer, "Case #%d: %d + %d = %d\n", i, A, B, A+B)
	}

}
