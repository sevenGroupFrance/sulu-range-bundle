import React from "react";
import { Range, getTrackBackground } from "react-range";
import './suluRange.scss';

const STEP = 1;
const MIN = 0;
const MAX = 100;

class SuluRange extends React.PureComponent {
  constructor() {
    super();
    this.state = { value: 50 };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const div = document.querySelectorAll('div.range-container')
    for (let i = 0; i < div.length; i++) {
      const rangeCont = div[i].parentElement.parentElement.parentElement
      rangeCont.classList.add("range-label")
      const fieldCont = div[i].parentElement.parentElement
      fieldCont.classList.add("range-field-container")
    }
  }

  handleChange(value) {
    value = parseInt(value)
    this.setState({ value });
    this.props.onChange(value);
    this.props.onFinish();
  }

  render() {
    const { value: value } = this.props;

    const finalValue = value !== undefined
      ? value
      : this.state.value
    const min = this.props.schemaOptions.min !== undefined
      ? this.props.schemaOptions.min.value
      : MIN;
    const max = this.props.schemaOptions.max !== undefined
      ? this.props.schemaOptions.max.value
      : MAX;
    const step = this.props.schemaOptions.step !== undefined
      ? this.props.schemaOptions.step.value
      : STEP;
    const ratio = this.props.schemaOptions.ratio !== undefined
      ? this.props.schemaOptions.ratio.value
      : false;
    let output;

    if (ratio) {
      output = `${[finalValue][0]} / ${max - [finalValue][0]}`
    } else {
      output = [finalValue][0]
    }

    return (
      <div className="range-container">
        <Range
          values={[finalValue]}
          step={step}
          min={min}
          max={max}
          onChange={this.handleChange}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%"
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: [finalValue],
                    colors: ["#548BF4", "#ccc"],
                    min: min,
                    max: max
                  }),
                  alignSelf: "center"
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "20px",
                width: "20px",
                borderRadius: "50%",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA"
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "50px",
                  backgroundColor: isDragged ? "#548BF4" : "#CCC"
                }}
              />
            </div>
          )}
        />
        <output className="output">
          {output}
        </output>
      </div>
    );
  }
}

export default SuluRange;
