import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const AreaChart = ({ chartData }) => {
    const chartRef = useRef(null);

    useLayoutEffect(() => {
        const root = am5.Root.new(chartRef.current);
        root.setThemes([am5themes_Animated.new(root)]);

        const chart = root.container.children.push(
            am5xy.XYChart.new(root, {
                panX: true,
                panY: true,
                wheelX: "panX",
                wheelY: "zoomX",
                pinchZoomX: true,
            })
        );

        const xAxis = chart.xAxes.push(
            am5xy.DateAxis.new(root, {
                maxDeviation: 0.1,
                groupData: false,
                baseInterval: { timeUnit: "month", count: 1 },
                renderer: am5xy.AxisRendererX.new(root, {}),
            })
        );

        const yAxis = chart.yAxes.push(
            am5xy.ValueAxis.new(root, {
                renderer: am5xy.AxisRendererY.new(root, {}),
            })
        );

        const series = chart.series.push(
            am5xy.LineSeries.new(root, {
                name: "Monto",
                xAxis,
                yAxis,
                valueYField: "amount",
                valueXField: "date",
                fill: am5.color("#64b5f6"),
                stroke: am5.color("#1E88E5"),
            })
        );

        series.fills.template.setAll({
            fillOpacity: 0.3,
            visible: true,
        });

        const convertedData = chartData.map(item => ({
            date: new Date(item.date).getTime(),
            amount: item.amount
        }));

        series.data.setAll(convertedData);

        chart.set("scrollbarX", am5.Scrollbar.new(root, { orientation: "horizontal" }));

        return () => root.dispose();
    }, [chartData]);

    return <div ref={chartRef} style={{ width: "100%", height: "400px" }}></div>;
};

export default AreaChart;
