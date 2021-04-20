import React from 'react';
import { Wrapper } from './styled';

function PieChart(props){
    let {
        numerator,
        colorGraph,
        colorFill,
        colorPercents,
        colorNumber,
        colorUnits
    } = props;
    let percentage = numerator / 100;
    let deg = 360 * percentage;

    return(
        <Wrapper
            colorGraph={colorGraph ? colorGraph : ''}
            colorFill={colorFill ? colorFill : ''}
            colorPercents={colorPercents ? colorPercents : ''}
            colorNumber={colorNumber ? colorNumber :''}
            colorUnits={colorUnits ? colorUnits : ''}
            ValueDeg={deg}
        >
            <div className={`pie-chart ${percentage >= 0.5 &&'gt-50'}`} data-pie-chart data-percent={numerator}>
                <div className="pie-chart-progress">
                    <div className="pie-chart-progress-fill">
                        {`${numerator}%`}
                    </div>
                </div>
                {`${numerator}%`}
                {/* <div className="pie-chart-percents">
                    {`${numerator}%`}
                    <div className="pie-chart-percents-wrapper">
                        <span className="pie-chart-percents-number">{`${numerator}%`}</span>
                    </div>
                </div> */}
            </div>
        </Wrapper>
    );
}

export default PieChart;
