package main

import (
	"bufio"
	"fmt"
	"os"
)

func main2557() {

	var writer *bufio.Writer = bufio.NewWriter(os.Stdout)

	defer writer.Flush()

	fmt.Fprint(writer, "Hello World!")
}
