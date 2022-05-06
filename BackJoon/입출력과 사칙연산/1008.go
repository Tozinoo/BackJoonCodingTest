package main

import (
	"fmt"
)

func Main1008() {
	var a int
	var b int
	fmt.Scanf("%d %d", &a, &b)
	fmt.Printf("%0.20f", float64(a)/float64(b))
}
