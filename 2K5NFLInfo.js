/*    
 @licstart The following is the entire license notice for the 
        JavaScript code in this page.

        Copyright (C) 2021  Mark Robillard Jr

        The JavaScript code in this page is free software: you can
        redistribute it and/or modify it under the terms of the GNU
        General Public License (GNU GPL) as published by the Free Software
        Foundation, either version 3 of the License, or (at your option)
        any later version.  The code is distributed WITHOUT ANY WARRANTY;
        without even the implied warranty of MERCHANTABILITY or FITNESS
        FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
        *
  @licend*/
        
        
"use strict";


var gameTitle = "ESPN NFL 2K5 Fantasy Season Results <br> Week 13 of 17";

var division = ["NFC North", "NFC South", "NFC East", "NFC West",
    "AFC North", "AFC South", "AFC East", "AFC West"
];

var team = [
    ["x-Green Bay Packers", "Detroit Lions", "Chicago Bears", "Minnesota Vikings"],
    ["x-Tampa Bay Buccanneers", "Atlanta Falcons", "Carolina Panthers", "New Orleans Saints"],
    ["Washington Redskins", "Dallas Cowboys", "Philadelphia Eagles", "New York Giants"],
    ["Seattle Seahawks", "San Francisco 49ers", "Arizona Cardinals", "St. Louis Rams"],
    ["Baltimore Ravens", "Pittsburgh Steelers", "Cleveland Browns", "Cincinnati Bengals"],
    ["Tennessee Titans", "Indianapolis Colts", "Houston Texans", "Jacksonville Jaguars"],
    ["New England Patriots", "Buffalo Bills", "New York Jets", "Miami Dolphins"],
    ["y-San Diego Chargers", "Denver Broncos", "Kansas City Chiefs", "Oakland Raiders"]
];

var conference = [
    ["NFC", "NFC", "NFC", "NFC"],
    ["NFC", "NFC", "NFC", "NFC"],
    ["NFC", "NFC", "NFC", "NFC"],
    ["NFC", "NFC", "NFC", "NFC"],
    ["AFC", "AFC", "AFC", "AFC"],
    ["AFC", "AFC", "AFC", "AFC"],
    ["AFC", "AFC", "AFC", "AFC"],
    ["AFC", "AFC", "AFC", "AFC"]
];

var wins = [
//NFC start
    [10, 7, 4, 1],
    [11, 6, 5, 3],
    [9, 4, 4, 3],
    [6, 6, 5, 4],
//NFC end
//AFC start
    [7, 7, 6, 3],
    [6, 6, 6, 6],
    [8, 7, 2, 2],
    [10, 5, 5, 2],
//AFC end
];

var losses = [
//NFC start
    [1, 4, 7, 10],
    [0, 5, 6, 8],
    [2, 7, 7, 8],
    [5, 5, 6, 7],
//NFC end
//AFC start
    [4, 4, 5, 8],
    [5, 5, 5, 5],
    [3, 4, 9, 9],
    [1, 6, 6, 9],
//AFC end
];

