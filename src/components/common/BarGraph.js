import { ResponsiveBar } from '@nivo/bar';
import styled, { css } from 'styled-components';

const GraphWrapper = styled.div`
  height: ${({ height }) => (height ? `${height}px` : '40vh')};
  width: 75vw;
  margin: 0 auto;
  min-width: ${({ minWidth }) => minWidth && '1000px'} text {
    font-size: 20px;
  }
  @media screen and (max-width: 1200px) {
    width: 90vw;
  }
`;

function BarGraph({
  data,
  keys,
  index,
  onClick,
  layout,
  borderRadius,
  valueFormat,
  colors,
  groupMode,
  height,
  minWidth,
}) {
  return (
    <GraphWrapper height={height} minWidth={minWidth}>
      <ResponsiveBar
        data={data}
        keys={keys}
        indexBy={index}
        margin={{ top: 50, right: 50, bottom: 50, left: 90 }}
        valueFormat={
          valueFormat
            ? valueFormat
            : (value) => `${Number(value).toLocaleString()}`
        }
        groupMode={groupMode}
        padding={0.4}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        theme={{
          axis: {
            fontSize: '50px',
          },
        }}
        layout={layout}
        colors={colors}
        borderRadius={borderRadius}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 10,
          tickPadding: 5,
          tickRotation: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={13}
        role="application"
        barAriaLabel={function (e) {
          return (
            e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
          );
        }}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', '3']],
        }}
        onClick={onClick}
      />
    </GraphWrapper>
  );
}

export default BarGraph;
