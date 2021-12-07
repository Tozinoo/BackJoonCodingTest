package main

import "fmt"

func Main14681() {
	var x, y int
	fmt.Scanf("%d %c", &x)
	fmt.Scanf("%d", &y)

	if x == 0 {
		return
	}
	if y == 0 {
		return
	}

	switch {
	case x > 0 && y > 0:
		fmt.Println(1)
	case x > 0 && y < 0:
		fmt.Println(4)
	case x < 0 && y > 0:
		fmt.Println(2)
	case x < 0 && y < 0:
		fmt.Println(3)
	}

}
