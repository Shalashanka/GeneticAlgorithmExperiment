# Genetic Algorithm Experiment for automatic vacuum cleaner's path prediction, obstacle avoidance and most efficient way calculation
An experiment for the development of a Genetic Algorithm made by me for fun, no libraries(except p5.js) were used, everything was studied and implemented by me.

## Features

 1-First thing is to create a fully working dummy, a player object that is capable of moving in a 2D environment moving Left,Right,Up,Down.

 2-After the dummy is successfully created some keybindings were added in order to test it's capability to move, note that the movement is a snake style continuous, once you press a key the player moves in that direction until another key is pressed.

 3-At this point it's time to implement a self moving capability to the dummy, a function was created inside the class that generates numbers randomly from 1 to 1000 and if the number is 6 then calls a function that randomly determines where to go, in this function the direction where the player is going is checked and if the direction is along the X-axis then it uses a random variable to determine where to go up or down, same thing if it is moving in the Y-axis, it determines if it should go right or left.(I am still studying a way to make the movement more fluid, instead of making it totally random by considering also hte direction it was moving before in order to not have it move innaturally changing drastically direction, but this is still in development)

 4-Now that the Dummy is able to move itself i added some food that randomly spawns and can be eaten by the dummy.

 5-Next step is to implement a sight for the dummy in order to have it be able to view at a certain distance and check if there is any food available and then implement a function to make it crave for food and move around to eat food.

 6-After that i am planning to add obstacles with some of them being absolutely deadly and some of them being harmful(this is necessary for the dummy to learn to avoid them)

 7-And after that comes the implementation of the genes, mutation and passing genes to next generations.

## Notes

These are just rough ideas i had on a Tuesday afternoon, in the future ideas and goals might change, the whole project could change but for now i'm just having fun doing it.

The code is poorly commented at the moment as i did this in roughly 20 minutes of free time, in the future i will update, comment and make it clean.
