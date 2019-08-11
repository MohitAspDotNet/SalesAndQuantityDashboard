window.onload = function () {
    $("#panel").hide();
    var columnLineChart = new CanvasJS.Chart("columnLineChartContainer", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Quantity Sold And Sales Value in $"
        },
        axisY: {
            title: "Quantity Sold"
        },
        data: [{
            type: "column",
            name: "Quantity Sold",
            showInLegend: true,
            xValueFormatString: "MMMM YYYY",
            yValueFormatString: "$#,##0",
            dataPoints: [{
                x: new Date(2016, 0),
                y: 20000
            },
            {
                x: new Date(2016, 1),
                y: 30000
            },
            {
                x: new Date(2016, 2),
                y: 25000
            },
            {
                x: new Date(2016, 3),
                y: 70000
            },
            {
                x: new Date(2016, 4),
                y: 50000
            },
            {
                x: new Date(2016, 5),
                y: 35000
            },
            {
                x: new Date(2016, 6),
                y: 30000
            },
            {
                x: new Date(2016, 7),
                y: 43000
            },
            {
                x: new Date(2016, 8),
                y: 35000
            },
            {
                x: new Date(2016, 9),
                y: 30000
            },
            {
                x: new Date(2016, 10),
                y: 40000
            },
            {
                x: new Date(2016, 11),
                y: 50000
            }
            ]
        },
        {
            type: "line",
            name: "Sales Value",
            showInLegend: true,
            yValueFormatString: "$#,##0",
            dataPoints: [{
                x: new Date(2016, 0),
                y: 40000
            },
            {
                x: new Date(2016, 1),
                y: 42000
            },
            {
                x: new Date(2016, 2),
                y: 45000
            },
            {
                x: new Date(2016, 3),
                y: 45000
            },
            {
                x: new Date(2016, 4),
                y: 47000
            },
            {
                x: new Date(2016, 5),
                y: 43000
            },
            {
                x: new Date(2016, 6),
                y: 42000
            },
            {
                x: new Date(2016, 7),
                y: 43000
            },
            {
                x: new Date(2016, 8),
                y: 41000
            },
            {
                x: new Date(2016, 9),
                y: 45000
            },
            {
                x: new Date(2016, 10),
                y: 42000
            },
            {
                x: new Date(2016, 11),
                y: 50000
            },
            ]
        }
        ]
    });
    columnLineChart.render();

    var multiColumnChart = new CanvasJS.Chart("multiColumnChartContainer", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Sales Values"
        },
        axisY: {
            title: "Reserves(MMbbl)"
        },
        data: [{
            type: "column",
            showInLegend: true,
            legendMarkerColor: "grey",
            legendText: "Wet",
            name: "Wet",
            color: "gold",
            dataPoints: [{
                y: 300878,
                label: "Venezuela"
            },
            {
                y: 266455,
                label: "Saudi"
            },
            {
                y: 169709,
                label: "Canada"
            },
            {
                y: 158400,
                label: "Iran"
            },
            {
                y: 142503,
                label: "Iraq"
            },
            {
                y: 101500,
                label: "Kuwait"
            },
            {
                y: 97800,
                label: "UAE"
            },
            {
                y: 80000,
                label: "Russia"
            }
            ]
        },
        {
            type: "column",
            showInLegend: true,
            legendMarkerColor: "silver",
            legendText: "Dry",
            name: "Dry",
            color: "silver",
            dataPoints: [{
                y: 300541,
                label: "Venezuela"
            },
            {
                y: 261234,
                label: "Saudi"
            },
            {
                y: 165678,
                label: "Canada"
            },
            {
                y: 250987,
                label: "Iran"
            },
            {
                y: 142888,
                label: "Iraq"
            },
            {
                y: 101654,
                label: "Kuwait"
            },
            {
                y: 67444,
                label: "UAE"
            },
            {
                y: 50006,
                label: "Russia"
            }
            ]
        }
        ]
    });
    multiColumnChart.render();


    var qualitySoldDoughnutChart = new CanvasJS.Chart("qualitySoldDoughnutChartContainer", {
        animationEnabled: true,
        title: {
            text: "Quantity Sold by Toxicity",
            horizontalAlign: "left"
        },
        data: [{
            type: "doughnut",
            startAngle: 60,
            click: onClick,
            //innerRadius: 60,
            indexLabelFontSize: 17,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [{
                y: 25,
                label: "Green",
                color: "green"
            },
            {
                y: 35,
                label: "Red",
                color: "red"
            },
            {
                y: 40,
                label: "Yellow",
                color: "Yellow"
            }
            ]
        }]
    });
    qualitySoldDoughnutChart.render();


    var salesValueDoughnutChart = new CanvasJS.Chart("salesValueDoughnutChartContainer", {
        animationEnabled: true,

        title: {
            text: "Sales Values by Toxicity",
            horizontalAlign: "left"
        },
        data: [{
            type: "doughnut",
            startAngle: 60,
            click: onClick,
            //innerRadius: 60,
            indexLabelFontSize: 17,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [{
                y: 67,
                label: "Green",
                color: "green"
            },
            {
                y: 28,
                label: "Red",
                color: "red"
            },
            {
                y: 10,
                label: "Yellow",
                color: "Yellow"
            }
            ]
        }]
    });
    salesValueDoughnutChart.render();
}

function onClick(e) {
    $("#panel").toggle(1000);
    var data = [{
        "SoldBy": "Sam",
        "Quantity": "9594",
        "Defects": "10"
    },
    {
        "SoldBy": "John",
        "Quantity": "9615",
        "Defects": "20"
    },
    {
        "SoldBy": "Will",
        "Quantity": "9602",
        "Defects": "30"
    }
    ];
    var table = document.getElementById('table');
    $("#table tr").remove();
    var header = document.createElement('tr');
    header.innerHTML = '<th>Sold By</th><th>Quantity</th><th>Defects</th>';
    table.appendChild(header);
    tr = "";
    data.forEach(function (object) {
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + object.SoldBy + '</td>' +
            '<td>' + object.Quantity + '</td>' +
            '<td>' + object.Defects + '</td>';
        table.appendChild(tr);
    });
}