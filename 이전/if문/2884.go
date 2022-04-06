package main

import "fmt"

func main() {
	var h, m int
	var rh, rm int
	fmt.Scanf("%d %d", &h, &m)

	rh = h
	rm = m - 45
	if rm < 0 {
		rh -= 1
		rm += 60
		if rh < 0 {
			rh = 23
		}
	}
	fmt.Printf("%d %d", rh, rm)

}
