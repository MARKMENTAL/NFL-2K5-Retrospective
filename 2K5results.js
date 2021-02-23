"use strict";


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
        @licend */

/* Callback Function to calculate an array sum */
function calcSumWin(value) {
    totalWins += value;
}

function calcSumLoss(value) {
    totalLosses += value;
}

function playoffberths(){
    var playoffberthsHTML = '';
    playoffberthsHTML += "<table> <caption> Playoff Berth 🔑 </caption>";
    playoffberthsHTML += "<tr><td> <b> x </b>- clinched playoff berth </td> </tr>";
    playoffberthsHTML += "<tr><td> <b> y </b>- clinched playoff division </td> </tr>";
    playoffberthsHTML += "<tr><td> <b> z </b>- clinched 1st round bye </td> </tr>";
    playoffberthsHTML += "<tr><td> <b> * </b>- clinched home field advantage </td> </tr> </table>";
    return playoffberthsHTML;
}


function teamRows(divisionNum, totalWins, totalLosses) {
    var rowHTML = '';
    rowHTML += "<table>" + "<caption>" + division[i] + "</caption>" + "<tr><th>Team</th><th>W/L </th>";
    rowHTML += "<th> Visual </th></tr>";
    for (var j = 0; j < 4; j++) {
        var teamName = team[divisionNum][j];
        var teamConference = conference[divisionNum][j];
        var teamWins = wins[divisionNum][j];
        var teamLosses = losses[divisionNum][j];
        var teamTotal = [team[divisionNum][j], wins[divisionNum][j], losses[divisionNum][j]];

        for (var l = 0; l < teamTotal.length;) {
            if (teamTotal[0].includes( "Tampa")) {
                rowHTML += '<tr>' + '<td style = "color:darkred;"> <b>' + teamTotal[l] + ' </b></td>';
            }
            else if (teamTotal[0].includes ("Green Bay")) {
                rowHTML += '<tr>' + '<td style = "color:green;"> <b>' + teamTotal[l] + ' </b></td>';
            } 
	    else {
                rowHTML += '<tr>' + '<td>' + teamTotal[l] + '</td>';
            }
            l++;
            rowHTML += '<td>' + teamTotal[l].toLocaleString() + '</td>';
            l++;
            rowHTML += '<td>' + teamTotal[l].toLocaleString() + '</td>';
            l++;
        }

        for (var k = 0; k < teamWins; k++) {
            rowHTML += createBar(teamConference, totalWins);
        }

        rowHTML += '</tr>';
        var divisionleader = team[divisionNum][0];
    }

    rowHTML += '<tr> <td><b> Division leader is: ' + divisionleader + '</td> </b></tr>'
    return rowHTML;
}

//function to create bar graphs and conference logo meters
function createBar(confType) {

    var barHTML = "";


    switch (confType) {
        case "AFC":
            barHTML = "<img src ='https://nfl2k3fantasyseasons.neocities.org/afclogo.png' id ='afclogo' ><td class='AFC'></td>";
            return barHTML;
        case "NFC":
            barHTML = "<img src ='https://nfl2k3fantasyseasons.neocities.org/nfclogo.png' id ='nfclogo' ><td class='NFC'></td>";
            return barHTML;
    }
}

function BestConference() {
    var proHTML = "";
    proHTML += "<table id ='bestAFC'>" + "<caption> AFC Predicted Champion</caption>";
    proHTML += "<tr><th id ='thAFC'> Team</th></tr>";
    proHTML += "<tr><td>" + team[7][0] + "</td>" + "</tr> </table>";
    proHTML += "<table id ='bestNFC'>" + "<caption> NFC Predicted Champion</caption>";
    proHTML += "<tr><th id ='thNFC'>Team</th></tr>";
    proHTML += "<tr><td>" + team[1][0] + "</td>"  + "</tr> </table>";
    return proHTML;
}



var reportHTML = "<h1>" + gameTitle + "</h1>";
var i;
 reportHTML += playoffberths();
for (i = 0; i < division.length; i++) {
    var totalWins = 0;
    var totalLosses = 0;
    wins[i].forEach(calcSumWin);
    losses[i].forEach(calcSumLoss);
    reportHTML += teamRows(i, totalWins, totalLosses);
    reportHTML += "</table>";
}
reportHTML += BestConference();

document.getElementsByTagName("section")[0].innerHTML = reportHTML;
