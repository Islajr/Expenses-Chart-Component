const labels = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];

const data = {
    labels: labels,
    datasets: [
        {
            label: "",
            borderRadius: 5,
            backgroundColor: [
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
                "hsl(186, 34%, 60%)",
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
                "hsl(10, 79%, 65%)",
            ],
            data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
        },
    ],
};

const config = {
    type: "bar",
    data: data,
    options: {
        animation: {
            duration: 3000,
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    font: {
                        family: "DM Sans",
                        size: 14,
                    },
                    color: "hsl(28, 10%, 53%)",
                },
            },
            y: {
                display: false,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    title: () => null,
                    label: function (context) {
                        let label = context.dataset.label || "";

                        if (label) {
                            label += ": ";
                        }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                            }).format(context.parsed.y);
                        }
                        return label;
                    },
                },
            },
        },
    },
};
Chart.defaults.font.family = "DM Sans";
Chart.defaults.plugins.tooltip.padding = 10;
// Chart.defaults.plugins.tooltip.bodyFont.size = 100
Chart.defaults.plugins.tooltip.displayColors = false;
Chart.defaults.plugins.tooltip.backgroundColor = "hsl(25, 47%, 15%)";
Chart.defaults.plugins.tooltip.cornerRaduis = 5;
Chart.defaults.plugins.tooltip.xAlign = "center";
Chart.defaults.plugins.tooltip.yAlign = "bottom";
Chart.defaults.plugins.tooltip.bodyAlign = "center";
Chart.defaults.plugins.tooltip.titleAlign = "center";

const myChart = new Chart(
    document.getElementById("myChart").getContext("2d"),
    config
);
