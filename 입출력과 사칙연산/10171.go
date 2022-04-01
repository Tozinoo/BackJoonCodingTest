package main

import (
	"bufio"
	"fmt"
	"os"
)

func main10171() {
	var writer *bufio.Writer = bufio.NewWriter(os.Stdout)

	defer writer.Flush()

	fmt.Fprint(writer, "\\    /\\\n )  ( ')\n(  /  )\n \\(__)|")
}
