package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
)

func main() {
	r := bufio.NewReader(os.Stdin)
	w := bufio.NewWriter(os.Stdout)

	defer w.Flush()

	for {
		var A, B int
		_, err := fmt.Fscan(r, &A, &B)
		log.Println(err)

		if err != nil {
			break
		}
		fmt.Fprintln(w, A+B)
	}
}
