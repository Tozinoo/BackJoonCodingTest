package main

import (
	"bufio"
	"fmt"
	"os"
)

func main10718() {
	var writer *bufio.Writer = bufio.NewWriter(os.Stdout)

	defer writer.Flush()

	fmt.Fprint(writer, "강한친구 대한육군\n강한친구 대한육군")
}
