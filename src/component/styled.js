import styled, { css } from 'styled-components';

let default_colorGraph = '#DBE0DF';
let default_colorFill = '#90C8F0';
let default_colorPercents = '#FCFCFC';
let default_colorNumber = '#90C8F0';
let default_colorUnits = '#90C8F0';

export const Wrapper = styled.div`
.pie-chart {
    width: 11.25rem;
    height: 11.25rem;
    border-radius: 50%;
    /* background-color: #DBE0DF; */
    background-color: ${props => props.colorGraph ? props.colorGraph : default_colorGraph};
    position: relative;
    float:left;
    align-items: center;

    &-progress {
        content: "";
        position: absolute;
        border-radius: 50%;
        left: calc(50% - 5.625rem);
        top: calc(50% - 5.625rem);
        width: 11.25rem;
        height: 11.25rem;
        clip: rect(0, 11.25rem, 11.25rem, 5.625rem);

        &-fill {
            content: "";
            position: absolute;
            border-radius: 50%;
            left: calc(50% - 5.625rem);
            top: calc(50% - 5.625rem);
            width: 11.25rem;
            height: 11.25rem;
            clip: rect(0, 5.625rem, 11.25rem, 0);
            /* background-color: #90C8F0; */
            background-color: ${props => props.colorFill ? props.colorFill : default_colorFill};
            -webkit-transform: ${props => props.ValueDeg ? `rotate(${props.ValueDeg}deg)` : 'rotate(0deg)'};
            -ms-transform: ${props => props.ValueDeg ? `rotate(${props.ValueDeg}deg)` : 'rotate(0deg)'};
            transform: ${props => props.ValueDeg ? `rotate(${props.ValueDeg}deg)` : 'rotate(0deg)'};
            /* 動畫效果 */
            /* -webkit-transition: -webkit-transform 3s ease-in;
            -ms-transition: -ms-transform 3s ease-in;
            transition: transform 3s ease-in; */
        }
    }

    &.gt-50 {
        /* background-color: #90C8F0; */
        background-color: ${props => props.colorFill ? props.colorFill : default_colorFill};

        .pie-chart-progress {
            clip: rect(0, 5.625rem, 11.25rem, 0);

            &-fill {
                clip: rect(0, 11.25rem, 11.25rem, 5.625rem);
                /* background-color: #DBE0DF; */
                background-color: ${props => props.colorGraph ? props.colorGraph : default_colorGraph};
            }
        }
    }

    &-percents {
        content: "";
        position: absolute;
        border-radius: 50%;
        left: calc(50% - 8.7rem/2);
        top: calc(50% - 8.7rem/2);
        width: 8.7rem;
        height: 8.7rem;
        /* background-color: #FCFCFC; */
        background-color: ${props => props.colorPercents ? props.colorPercents : default_colorPercents};
        text-align: center;
        display: table;
        z-index: 4;

        &-number {
            display: inline-block;
            font-size: 2.6rem;
            font-weight: 600;
            /* color: #90C8F0; */
            color: ${props => props.colorNumber ? props.colorNumber : default_colorNumber};
        }

        &-units {
            display: inline-block;
            font-size: 1rem;
            font-weight: 400;
            /* color: #90C8F0; */
            color: ${props => props.colorUnits ? props.colorUnits : default_colorUnits};
        }

        &-wrapper {
            display: table-cell;
            vertical-align: middle;
            line-height: 0;

            span {
                line-height: 1;
            }
        }
    }
}
`

export const Container = styled.div`
  margin: 0px auto;
  max-width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const BarChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const Chart = css`
  margin-top: 10px;
  width: 56px;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 420px) {
    width: 34px;
  }
`;

export const Number = styled.span`
  font-size: 1.5rem;
  text-align: center;
  color: ${(props) => props.color};
`;

export const MakeBar = styled.div`
  height: ${(props) => props.height}%;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.colors[0]},
    ${(props) => props.colors[1]}
  );
  ${Chart};
`;

export const BlackLine = styled.div`
  width: 100%;
  height: 5px;
  background-color: grey;
`;
