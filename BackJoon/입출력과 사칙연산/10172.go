package main

import (
	"bufio"
	"fmt"
	"os"
)

func main10172() {
	var writer *bufio.Writer = bufio.NewWriter(os.Stdout)

	defer writer.Flush()

	fmt.Fprint(writer, "|\\_/|\n|q p|   /}\n( 0 )\"\"\"\\\n|\"^\"`    |\n||_/=\\\\__|")
}
