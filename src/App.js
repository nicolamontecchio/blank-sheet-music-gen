import React from 'react';
import './App.css';
import 'rc-input-number/assets/index.css';
import * as jsPDF from 'jspdf'
import InputNumber from 'rc-input-number';


const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;


function compute_layout(
  margin_top,
  margin_bottom,
  margin_left,
  margin_right,
  n_staves,
  staff_height) {
  var space_between_staves = (PAGE_HEIGHT - margin_top - margin_bottom
			      - (n_staves * staff_height)) / (n_staves - 1);
  var staves_top_positions = [];
  for (var i = 0; i < n_staves; i++) {
    staves_top_positions.push(margin_top + i * (staff_height + space_between_staves));
  }
  return staves_top_positions;
}

class PreviewCanvas extends React.Component {

  // all params expressed in mm, scaled automatically

  drawLine(canvas, x0, y0, x1, y1) {
    // console.log('drawing line: ' + x0 + ', ' + y0 + ', ' + x1 + ', ' + y1)
    const ctx = canvas.getContext("2d");
    ctx.moveTo(x0 * canvas.width / PAGE_WIDTH, y0 * canvas.height / PAGE_HEIGHT);
    ctx.lineTo(x1 * canvas.width / PAGE_WIDTH, y1 * canvas.height / PAGE_HEIGHT);
    ctx.stroke();
  }

  drawStaff(canvas, y0) {
    // console.log('drawing staff: ' + y0)
    for (var i = 0; i < 5; i++) {
      var y = y0 + (i * this.props.staffHeight / 5);
      this.drawLine(canvas, this.props.marginLeft, y, PAGE_WIDTH - this.props.marginRight, y);
    }
  }

  drawBorder(canvas) {
    this.drawLine(canvas, 0, 0, PAGE_WIDTH, 0);
    this.drawLine(canvas, 0, PAGE_HEIGHT, PAGE_WIDTH, PAGE_HEIGHT);
    this.drawLine(canvas, 0, 0, 0, PAGE_HEIGHT);
    this.drawLine(canvas, PAGE_WIDTH, 0, PAGE_WIDTH, PAGE_HEIGHT);
  }

  _render() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var staves_tops = compute_layout(
      this.props.marginTop,
      this.props.marginBottom,
      this.props.marginLeft,
      this.props.marginRight,
      this.props.nStaves,
      this.props.staffHeight
    );
    for (var staff_y0 of staves_tops) {
      this.drawStaff(canvas, staff_y0);
    }
    this.drawBorder(canvas);
  }

  componentDidMount() {
    console.log("componentdidmount");
    this._render();
  }

  componentDidUpdate() {
    console.log("componentdidupdate");
    this._render();
  }

  render() {
    console.log("re-rendering");
    return(
	<div><canvas ref="canvas" width={this.props.width} height={this.props.height} /></div>
    )
  }
}


class Controls extends React.Component {

  generatePDF() {
    var staves_tops = compute_layout(
      this.props.marginTop,
      this.props.marginBottom,
      this.props.marginLeft,
      this.props.marginRight,
      this.props.nStaves,
      this.props.staffHeight
    );

    var doc = new jsPDF('p', 'mm', 'a4');
    for (var y0 of staves_tops) {
      for (var i = 0; i < 5; i++) {
    	var y = y0 + (i * this.props.staffHeight / 5.0 );
	doc.line(this.props.marginLeft, y, PAGE_WIDTH - this.props.marginRight, y, null);
      }
    }
    doc.save('a4.pdf')
  }

  render() {

    return (

      <div>

	<table>
	<tbody>
        <tr>
         <td>Number of staves</td>
        <td><InputNumber
              value={this.props.nStaves}
              min={1}
              onChange={this.props.changeNStaves}/></td>
        </tr>

        <tr>
         <td>Staff height (mm)</td>
        <td><InputNumber
              value={this.props.staffHeight}
              min={0}
              onChange={this.props.changeStaffHeight}/></td>
        </tr>

        <tr>
         <td>Top Margin (mm)</td>
        <td><InputNumber
             value={this.props.marginTop}
             min={0}
             onChange={this.props.changeMarginTop}/></td>
        </tr>
        <tr>
         <td>Bottom Margin (mm)</td>
        <td><InputNumber
              value={this.props.marginBottom}
              min={0}
              onChange={this.props.changeMarginBottom}/></td>
        </tr>
        <tr>
         <td>Left Margin (mm)</td>
        <td><InputNumber
              value={this.props.marginLeft}
              min={0}
              onChange={this.props.changeMarginLeft}/></td>
        </tr>
        <tr>
         <td>Right Margin (mm)</td>
        <td><InputNumber
              value={this.props.marginRight}
              min={0}
              onChange={this.props.changeMarginRight}/></td>
        </tr>
	</tbody>
	</table>

	<button onClick={this.generatePDF.bind(this)}>generate pdf</button>
    </div>
    );
  }
}


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      margin_top:20,
      margin_bottom:20,
      margin_left:20,
      margin_right:20,
      n_staves: 12,
      staff_height: 10
    };
  }

  handleChangeParam(param, newValue) {
    console.log("change param");
    console.log(param);
    console.log(newValue);
    if (param === 'n_staves') {
      this.setState({n_staves: newValue});
    } else if (param === 'staff_height') {
      this.setState({staff_height: newValue});
    } else if (param === 'margin_top') {
      this.setState({margin_top: newValue});
    } else if (param === 'margin_bottom') {
      this.setState({margin_bottom: newValue});
    } else if (param === 'margin_left') {
      this.setState({margin_left: newValue});
    } else if (param === 'margin_right') {
      this.setState({margin_right: newValue});
    }
  }

  render() {
    return (
	<div className="App">
          <Controls
            nStaves={this.state.n_staves}
            changeNStaves={(n) => this.handleChangeParam('n_staves',n)}
            staffHeight={this.state.staff_height}
            changeStaffHeight={(n) => this.handleChangeParam('staff_height',n)}
            marginTop={this.state.margin_top}
            changeMarginTop={(n) => this.handleChangeParam('margin_top',n)}
            marginBottom={this.state.margin_bottom}
            changeMarginBottom={(n) => this.handleChangeParam('margin_bottom',n)}
            marginLeft={this.state.margin_left}
            changeMarginLeft={(n) => this.handleChangeParam('margin_left',n)}
            marginRight={this.state.margin_right}
            changeMarginRight={(n) => this.handleChangeParam('margin_right',n)}
	/>
	<div>
	<PreviewCanvas
            width={400}
            height={600}
            nStaves={this.state.n_staves}
            staffHeight={this.state.staff_height}
            marginTop={this.state.margin_top}
            marginBottom={this.state.margin_bottom}
            marginLeft={this.state.margin_left}
            marginRight={this.state.margin_right}
	/>
	<br/>	<br/>	<br/>

	</div>
	</div>);
  }
}

export default App;
