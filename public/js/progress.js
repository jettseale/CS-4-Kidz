/*Chart JS based on work by https://canvasjs.com*/
window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "This Week's Progress"
        },
        axisY:{
            title: "Grade %",
            includeZero: false, 
            suffix: "%",
            maximum: 110
        },
        data: [{        
            type: "line",
            name: "Data Structures",
            yValueFormatString: "#0\"%\"",
            showInLegend: true,
            indexLabelFontSize: 16,
            dataPoints: [
                { label: "Sunday", y: 60 },
                { label: "Monday", y: 70},
                { label: "Tuesday", y: 100, indexLabel: "\u2191 Best score!", markerColor: "red", markerType: "triangle" },
                { label: "Wednesday", y: 80 },
                { label: "Thursday", y: 20 },
                { label: "Friday", y: 15, indexLabel: "\u2193 Work on these topics", markerColor: "DarkSlateGrey", markerType: "cross" },
                { label: "Saturday", y: 75 }
            ]
            },
            {        
                type: "line",
                name: "Algorithms",
                yValueFormatString: "#0\"%\"",
                showInLegend: true,
                indexLabelFontSize: 16,
                dataPoints: [
                    { label: "Sunday", y: 0, indexLabel: "\u2193 Work on these topics", markerColor: "DarkSlateGrey", markerType: "cross"},
                    { label: "Monday", y: 20 },
                    { label: "Tuesday", y: 60 },
                    { label: "Wednesday", y: 75 },
                    { label: "Thursday", y: 60 },
                    { label: "Friday", y: 90 },
                    { label: "Saturday", y: 96, indexLabel: "\u2191 Best score!", markerColor: "red", markerType: "triangle" }
                ]
            },
            {        
                type: "line",
                name: "Networking",
                yValueFormatString: "#0\"%\"",
                showInLegend: true,
                indexLabelFontSize: 16,
                dataPoints: [
                    { label: "Sunday", y: 45 },
                    { label: "Monday", y: 62 },
                    { label: "Tuesday", y: 89 },
                    { label: "Wednesday", y: 89, indexLabel: "\u2191 Best score!", markerColor: "red", markerType: "triangle"},
                    { label: "Thursday", y: 43, indexLabel: "\u2193 Work on these topics", markerColor: "DarkSlateGrey", markerType: "cross"},
                    { label: "Friday", y: 77 },
                    { label: "Saturday", y: 74 }
                ]
            }
        ]
    });
    chart.render();

    document.getElementsByClassName("back-to-settings")[0].addEventListener("click", () => {
        //PUT REDIRECT TO USER SETTINGS PAGE HERE
        alert("Need to fill in redirect to user settings page");
    });
}   