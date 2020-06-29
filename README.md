# Project Overview

## Project Name

"World's 100 Billionaires "

## Project Description

"World's 100 Billionaires" begins with an about page that displays a description of the website and what the next pages will be about. On the top of the page, it contains links to "About" and "Billionaires List" pages. If users visit or click "Billionaires List" page, they will see a list of 100 world's billionaires' with their pictures, names, net worth, rank, and main sources of wealth in a descending order of rank (by their net worth).

When users click on one of the billionaires on the list, they are directed to that individual person view page that displays additional information; the page includes current residence(city, state), number of shares owned, share price, and some interesting facts.

## API and Data Sample

[World's Billionaires Data API](https://forbes400.herokuapp.com/)

![Data Response Screenshot](https://github.com/kangja/World-Billionaires/blob/master/Data-Response.png).

## Wireframes

### Desktop View

[About Page](https://wireframe.cc/FPSe3E)

[Billionaires List](https://wireframe.cc/mMn5Jm)

[Individual Person View ](https://wireframe.cc/puOuDv)

### Tablet(iPad) View (Will look the same as the Desktop View)

[About Page](https://wireframe.cc/FPSe3E)

[Billionaires List](https://wireframe.cc/mMn5Jm)

[Individual Person View ](https://wireframe.cc/puOuDv)

### Mobile (Samsung Galaxy S8 +) View

[About Page](https://wireframe.cc/BLJEUi)

[Billionaires List](https://wireframe.cc/dpGVDM)

[Individual Person View ](https://wireframe.cc/S4IpaG)

## MVP/PostMVP

### MVP

- Have a navigation bar with two links
- Have 3 separate pages (About, Billionaires List, and Individual Person View)
- On about page, write a description of the website and make sure to have a button that directs to the list page when clicked.
- Render a list of world's billionaires on list page with pictures, rank, net worth, name, and main source of wealth.
- When one of the billionaires is clicked, the user will be directed to the individual person view page with additional information.
- Responsive design for Samsung Galaxy and iPad.

### PostMVP

- Advanced CSS
- Ask UI/UX Designers for advice and insight.
- Add a search bar/button that allows users to type in billionaire's name and render only the information that the user typed in the search bar instead of rednering a list of 100 Billionaires.

### MVP Component Hierarchy

```

|__ components/
      |__ App.js
      |__ About.js
      |__ Nav.js
      |__ Footer.js
      |__ ClickButton.js
      |__ BillionairesList.js
      |__ BillionaireDetail.js

```

## Project Schedule

| Day     | Deliverable                                                                                            | Status     |
| ------- | ------------------------------------------------------------------------------------------------------ | ---------- |
| June 29 | Project Plan(Wireframes / Time Frames/ Approval) + Navigation Bar(Nav.js) + ClickButton.js + Footer.js | Incomplete |
| June 30 | About Page + Billionaires List Page                                                                    | Incomplete |
| July 1  | Individual Person Page + CSS + Reponsive Design                                                        | Incomplete |
| June 2  | More CSS + Reponsive Design                                                                            | Incomplete |
| June 3  | MVP                                                                                                    | Incomplete |
| June 7  | Present                                                                                                | Incomplete |

## Timeframes

| Component              | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------- | :------: | :------------: | :-----------: | :---------: |
| Navigation Bar(Nav.js) |    H     |     1.5hrs     |      hrs      |     hrs     |
| ClickButton.js         |    H     |      1hrs      |      hrs      |     hrs     |
| Footer.js              |    H     |     1.5hrs     |      hrs      |     hrs     |
| About page             |    H     |     3.5hrs     |      hrs      |     hrs     |
| Billionaires List Page |    H     |      4hrs      |      hrs      |     hrs     |
| Individual Person Page |    H     |      4hrs      |      hrs      |     hrs     |
| CSS                    |    H     |      5hrs      |      hrs      |     hrs     |
| Reponsive Design       |    H     |      6hrs      |      hrs      |     hrs     |
| More CSS               |    M     |      5hrs      |      hrs      |     hrs     |
| Total                  |    H     |      hrs       |      hrs      |     hrs     |

## SWOT Analysis

Strength: Organizing the components.

Weaknesses: I'm not familiar with doing the responsive design. Still need to understand props better.

Opportunities: This project will allow me to grow my skill at responsive design than before. After the project, my understandstanding in React will increase.

Threats: I'm worried that responsive design will take me a long time because I'm not familiar with it.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

```

```

## Change Log

Use this section to document what changes were made and the reasoning behind those changes.
