package com.example.myGame;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api/movement")
public class MovementController {

    private int x = 200; // Initial x position
    private int y = 200; // Initial y position

    private final int step = 10; // Amount to move the circle each time

    // Handle the movement request
    @PostMapping
    public Map<String, Integer> move(@RequestParam String direction) {
        switch (direction) {
            case "up":
                this.y -= step; // Move up
                break;
            case "down":
                this.y += step; // Move down
                break;
            case "left":
                this.x -= step; // Move left
                break;
            case "right":
                this.x += step; // Move right
                break;
            default:
                break;
        }

        // Return the updated position
        Map<String, Integer> position = new HashMap<>();
        position.put("x", x);
        position.put("y", y);
        return position;
    }
}

