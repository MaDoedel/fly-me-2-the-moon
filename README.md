<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Fly-me-2-the-moon
</h1>

# Introduction
As a travel enthusiast, I often search various airlines for the most affordable tickets from airports in my area. However, this requires opening a tab for each day, at each airport, for each airline. From there, I reverse-engineer my schedule to find a convenient way to reach the airport if I decide to purchase the ticket. This involves comparing different public transportation options, travel agencies, and even community-based travel apps. With this increasing complexity, I need a solution that lists all available tickets for a selected period and provides additional information on how to reach the airport on time.

## Technology
The application is implemented in React using Gatsby as the tech stack.

### Functionality
1. **Select Possible Starting Dates**  
   The user selects possible dates on which they could begin their travel.

2. **Input Starting Points**  
   The user can set their location, either by selecting a preferred bus or train station.

3. **Set Airports**  
   The user can select a list of airports from which they might want to depart. If not specified, the closest airports are considered.

4. **Set Destination**  
   The destination can be a list of airports or a city with multiple airport options.

5. **Output**  
   For each selected day, a list of available tickets per airline is provided, with further expandable options showing 1-3 ways to reach the selected airport.
