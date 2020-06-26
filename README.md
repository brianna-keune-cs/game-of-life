# Visualizing the "Game of Life"

The main entry point of your application should house the visualization of this cellular automaton. Include necessary components, such as:

    [x] Grid to display cells.
    [x] Cell objects or components that, at a minimum, should have:
        Properties
           [x] current state: (alive, dead), (black, white)
            Clickable/Tappable:
                [x] can be clicked to allow user to setup initial cell configuration
                [x] should NOT be clickable while simulation is running
            Behaviors
                [x] Toggle state functionality: switch between alive & dead either because user manually toggled cell before starting simulation or simulation is running and rules of life caused cell to change state
    [x] An appropriate data structure to hold a grid of cells that is at least 25x25. Go as big as you want.
    [x] Text to display current generation # being displayed
        [x] Utilize a timeout function to build the next generation of cells & update the display at the chosen time interval
    [x] Button(s) that start & stop the animation
    [x] Button to clear the grid

## Write an algorithm that:

    [x] Implements the following basic steps:
        For each cell in the current generation's grid:
            [x] Examine state of all eight neighbors (it's up to you whether you want cells to wrap around the grid and consider cells on the other side or not)
            [x] Apply rules of life to determine if this cell will change states
            [x] When main loop completes:
                Swap current and next grids
                Repeat until simulation stopped
    [x] Breaks down above steps into appropriate sub-tasks implemented with helper functions to improve readability
    [x] Uses double buffering to update grid with next generation.
    [x] Does something well-documented with the edge of the grid. (e.g. wrap around to the far side--most fun!--or assumes all edge cells are permanently dead.)

## Custom Features

Implement at least 3 of the following features:

    [ ] Create a few sample cell configurations that users can load and run
    [x] Add an option that creates a random cell configuration that users can run
    [x] Add additional cell properties, like color or size, and incorporate them into your visualization
    [x] Allow users to specify the speed of the simulation
    [x] Provide functionality to manually step through the simulation one generation at a time, as opposed to animating automatically
    [x] Allow users to change the dimension of the grid being displayed
    [ ] Given a specific generation, calculate the configuration of cells at that point in time, and jump to that state, bypassing animation (i.e. skip ahead n generations).
    If you have an idea for a custom feature on this list, run it by your TL or instructor

About

    On the main entry point of the application, include a separate section or link to another page or popup that describes the two main rules (birth & death) of Conway’s Game of Life

## Stretch Goals

    Implement 2+ additional custom features, above
    Deploy your app to a hosting service or, for iOS, to TestFlight (or the App Store!). Web devs can see more deployment info here.
    Write a how-to guide or blog post that walks readers through the work you did to implement your project
    Expand your simulation into the third dimension. Google 3D Conways Life. Google for how to do 3D stuff on your platform. Web users might check out 3D-ThreeJS, and iOS might look at SceneKit.
    Explore alternate algorithms for finding the nth generation, such as Hashlife
