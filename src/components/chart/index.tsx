import React from 'react';
import ReactECharts from 'echarts-for-react';
import stl from './chart.module.css'

export function Chart() {

    

    // const option = {
    //     title: [
    //       {
    //         text: 'Tangential Polar Bar Label Position (middle)'
    //       }
    //     ],
    //     polar: {
    //       radius: [10, '80%']
    //     },
    //     angleAxis: {
    //       max: 4,
    //       startAngle: 75
    //     },
    //     radiusAxis: {
    //       type: 'category',
    //       data: ['Iº Trimestre', 'IIº Trimestre', 'IIIº Trimestre']
    //     },
    //     tooltip: {},
    //     series: {
    //       type: 'bar',
    //       data: [2, 1.2, 2.4, 3.6],
    //       coordinateSystem: 'polar',
    //       label: {
    //         show: true,
    //         position: 'middle', // or 'start', 'insideStart', 'end', 'insideEnd'
    //         formatter: '{b}: {c}'
    //       }
    //     }
    // };
    
    const lineOption = {
        title: { text: 'Gráfico de Linha' },
        tooltip: {},
        xAxis: { data: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'] },
        yAxis: {},
        series: [{ type: 'line', data: [5, 20, 15, 25, 30] }]
    };

    const pieOption = {
        title: { text: 'Gráfico de Pizza' },
        tooltip: {},
        series: [{
            type: 'pie',
            data: [
                { value: 335, name: 'Grupo A' },
                { value: 310, name: 'Grupo B' },
                { value: 234, name: 'Grupo C' },
                { value: 135, name: 'Grupo D' },
                { value: 1548, name: 'Grupo E' }
            ]
        }]
    };

    const barOption = {
        title: { text: 'Gráfico de Barras' },
        tooltip: {},
        xAxis: { data: ['1ª Nota', '2ª Nota', '3ª Nota', 'Media'] },
        yAxis: {},
        series: [
            { 
                type: 'bar', 
                data: [5, 10, 15, 20] 
            }
        ]
    };

    return (
        <div>
            {/* <ReactECharts option={pieOption} /> */}
            {/* <ReactECharts option={barOption} className={stl.chart_bar}/> */}
        </div>
    );
};

interface IPropsChartBar {
    title: string;
}

export function ChartBar({title}: IPropsChartBar) {

    const barOption = {
        title: { text: title },
        tooltip: {},
        xAxis: { data: ['1ª Trimestre', 'Bem Desempenhado', '3ª Trimestre', 'Media'] },
        yAxis: {},
        series: [
            { 
                type: 'bar', 
                data: [5, 10, 15, 20] 
            }
        ]
    };

    return (
        <div>
            <ReactECharts option={barOption} className={stl.chart_bar}/>
        </div>
    );
};


export function ChartMain() {
    const option = {
        title: [
            // {
            //     text: 'Radial Polar Bar Label Position (middle)'
            // }
        ],
        polar: {
            radius: [30, '70%']
        },
        radiusAxis: {
            max: 4
        },
        angleAxis: {
            type: 'category',
            data: ['Notas', 'Fouco', 'Presença'],
            startAngle: 0
        },
        tooltip: {},
        series: [{
            type: 'bar',
            data: [2, 1.2, 3.4],
            coordinateSystem: 'polar',
            label: {
                show: false,
                position: '',
                formatter: '{b}: {c}'
            },
            itemStyle: {
                // Definindo cores personalizadas para cada barra
                color: (params: any) => {
                    const colors = ['#56b8e6', '#333333', '#b62a2a']; // Cores personalizadas
                    return colors[params.dataIndex]; // Retorna a cor correspondente ao índice do dado
                }
            }
        }],
        animation: true
    };

    return (
        <ReactECharts option={option} />
    );
}