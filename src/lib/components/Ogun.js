import React, { Component } from "react";
import PropTypes from "prop-types"; 
class Ogun extends Component {
  constructor(props) {
    super(props);
    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();

    this.state = {
      hoverColor:this.props.hoverColor,
   hoverBackgroundColor:this.props.hoverBackgroundColor,
      renderData:this.props.renderData,
      defaultColor:this.props.defaultColor,
      id:this.props.id
    };
  }

  componentWillMount() {}
  componentDidMount() {
    let styles = document.head.appendChild(document.createElement("style"));
    styles.innerHTML += `
    #${this.state.id}:hover{fill: ${this.state.hoverColor} }
    #${this.state.id}{fill: ${this.state.defaultColor} }
    #${this.state.id}{background-color: ${this.state.hoverBackgroundColor} }
    `;
    this.myRef1.current.innerHTML += this.state.renderData;
  }                                                      
 render() {
    return (
      <div className="App">
        <a href="javascript:void(0)" className="tip">
          <span id={this.state.id} ref={this.myRef1}>Ogun State</span>
          <svg
            height="300.0226150793651"
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{overflow: "hidden", position: "relative", left: "-0.2px", top: "0.733333px"}}
            viewBox="-1.746107932431534 183.97845117845117 62.827930150577345 51.05579605579605"
            preserveAspectRatio="xMinYMin"
          >
            <rect
              x="-2015.01"
              y="-1637.27"
              width="5040"
              height="4095.65"
              r="0"
              rx="0"
              ry="0"
              fill="#ffffff"
              stroke="none"
              transform="matrix(0.3663,0,0,0.3663,0,0)"
              strokeWidth="0.464611440564457"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0"}}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
               stroke="#ffffff"id={this.state.id}ref={this.myRef2}
              d="M117.9,574.4L123.80000000000001,571.5L125.50000000000001,575.1L126.20000000000002,578.8000000000001L129.60000000000002,578.4000000000001L132.70000000000002,576.4000000000001L136.60000000000002,576.3000000000001L139.3,578.6L140.3,580.7L141.10000000000002,582.8000000000001L141.3,584.2L141.8,585.4000000000001L144.10000000000002,585.5000000000001L147.10000000000002,583.9000000000001L148.8,584.4000000000001L150.60000000000002,584.5000000000001L152.00000000000003,583.9000000000001L153.50000000000003,583.5000000000001L156.90000000000003,583.2000000000002L158.20000000000005,584.8000000000002L156.30000000000004,595.8000000000002L154.70000000000005,597.9000000000002L147.20000000000005,603.4000000000002L143.10000000000005,607.8000000000002L141.00000000000006,613.3000000000002L141.00000000000006,615.9000000000002L142.20000000000005,618.0000000000002L143.30000000000004,618.8000000000002L146.00000000000003,619.7000000000002L147.40000000000003,619.9000000000002L151.70000000000005,620.1000000000003L155.30000000000004,617.8000000000003L156.60000000000005,615.9000000000003L158.70000000000005,614.9000000000003L160.20000000000005,617.1000000000004L160.20000000000005,623.0000000000003L161.00000000000006,626.9000000000003L160.80000000000007,628.1000000000004L159.80000000000007,629.1000000000004L158.50000000000006,629.5000000000003L154.30000000000007,632.6000000000004L151.60000000000008,633.0000000000003L150.20000000000007,633.5000000000003L151.70000000000007,635.2000000000004L154.20000000000007,635.2000000000004L158.80000000000007,637.2000000000004L158.90000000000006,639.5000000000003L157.60000000000005,641.0000000000003L152.60000000000005,640.6000000000004L152.50000000000006,640.7000000000004L145.20000000000005,637.5000000000003L139.90000000000003,636.5000000000003L140.30000000000004,634.0000000000003L140.20000000000005,631.8000000000003L137.90000000000003,631.0000000000003L133.10000000000002,630.8000000000003L131.20000000000002,631.3000000000003L129.8,630.4000000000003L128.60000000000002,629.3000000000003L126.30000000000003,628.7000000000003L124.40000000000002,627.5000000000002L124.20000000000002,625.4000000000002L129.00000000000003,622.8000000000002L129.80000000000004,621.0000000000002L128.90000000000003,619.3000000000002L126.50000000000003,618.4000000000002L123.80000000000003,619.0000000000002L121.30000000000003,620.7000000000003L118.80000000000003,622.0000000000002L116.40000000000002,620.1000000000003L116.30000000000003,619.0000000000002L115.50000000000003,617.0000000000002L116.20000000000003,614.9000000000002L118.20000000000003,613.3000000000002L119.10000000000004,611.1000000000001L114.20000000000003,609.8000000000002L65.60000000000002,610.0000000000002L64.80000000000003,610.8000000000002L64.60000000000002,612.0000000000002L63.60000000000002,613.4000000000002L62.00000000000002,613.7000000000002L59.00000000000002,613.6000000000001L57.10000000000002,611.1000000000001L53.300000000000026,609.1000000000001L51.300000000000026,608.5000000000001L48.700000000000024,609.6000000000001L48.200000000000024,610.8000000000002L47.00000000000002,615.1000000000001L45.700000000000024,616.5000000000001L44.50000000000002,618.2000000000002L43.60000000000002,622.3000000000002L42.40000000000002,623.7000000000002L37.50000000000002,624.3000000000002L19.300000000000022,623.5000000000002L18.400000000000023,624.0000000000002L18.500000000000025,625.2000000000003L16.900000000000023,627.0000000000002L14.700000000000024,628.5000000000002L12.600000000000025,628.6000000000003L10.400000000000023,627.9000000000002L7.600000000000024,628.2000000000002L4.300000000000024,627.9000000000002L4.600000000000024,626.2000000000002L6.500000000000023,620.8000000000002L6.600000000000023,619.1000000000001L5.900000000000023,615.5000000000001L5.900000000000023,613.8000000000001L6.900000000000023,612.0000000000001L8.400000000000023,610.7000000000002L9.400000000000023,610.0000000000001L9.900000000000023,609.0000000000001L9.600000000000023,605.2000000000002L9.500000000000023,604.3000000000002L9.000000000000023,603.9000000000002L7.100000000000023,603.6000000000003L5.700000000000022,602.2000000000003L5.300000000000022,600.6000000000003L5.500000000000022,598.8000000000003L6.400000000000023,595.3000000000003L6.000000000000022,591.7000000000003L4.900000000000022,588.5000000000002L4.600000000000022,585.5000000000002L6.800000000000022,582.5000000000002L9.700000000000022,581.2000000000003L10.000000000000023,580.3000000000003L9.500000000000023,579.5000000000003L7.300000000000023,577.7000000000004L6.600000000000023,576.8000000000004L6.400000000000023,575.2000000000004L7.500000000000023,573.0000000000003L8.200000000000022,572.1000000000004L8.500000000000023,570.2000000000004L6.800000000000023,549.5000000000003L7.000000000000023,548.6000000000004L7.600000000000023,548.2000000000004L8.500000000000023,548.2000000000004L10.300000000000024,548.6000000000004L10.800000000000024,547.2000000000004L11.000000000000023,543.7000000000004L9.200000000000022,540.6000000000004L6.700000000000022,537.7000000000004L5.100000000000023,534.6000000000004L4.600000000000023,531.3000000000004L5.600000000000023,517.2000000000004L5.400000000000023,516.0000000000003L4.600000000000023,514.8000000000003L2.700000000000023,512.5000000000003L1.7000000000000228,510.10000000000036L1.0000000000000229,508.80000000000035L1.6000000000000227,508.50000000000034L8.700000000000022,503.4000000000003L16.800000000000022,503.6000000000003L18.900000000000023,507.6000000000003L19.300000000000022,516.9000000000003L20.800000000000022,521.5000000000003L23.100000000000023,521.9000000000003L23.900000000000023,517.6000000000004L25.100000000000023,513.9000000000003L28.300000000000022,513.8000000000003L28.800000000000022,521.2000000000003L25.70000000000002,529.7000000000003L25.800000000000022,531.5000000000002L27.400000000000023,535.8000000000002L30.900000000000023,538.7000000000002L33.60000000000002,542.3000000000002L37.40000000000002,549.1000000000001L43.20000000000002,554.4000000000001L47.80000000000002,556.0000000000001L52.40000000000002,555.8000000000001L55.80000000000002,552.9000000000001L59.100000000000016,544.6000000000001L62.600000000000016,542.3000000000002L65.60000000000002,544.6000000000001L67.10000000000002,548.7000000000002L69.50000000000003,550.0000000000001L71.90000000000003,548.7000000000002L74.40000000000003,547.6000000000001L82.70000000000003,547.8000000000002L85.60000000000004,551.9000000000002L85.50000000000004,556.6000000000003L85.70000000000005,558.0000000000002L88.20000000000005,559.8000000000002L90.60000000000005,561.1000000000001L91.10000000000005,562.6000000000001L91.10000000000005,564.2000000000002L91.30000000000005,565.5000000000001L91.90000000000005,566.7000000000002L92.90000000000005,571.7000000000002L89.80000000000005,576.0000000000001L87.50000000000006,579.8000000000001L92.50000000000006,580.0000000000001L102.80000000000005,578.8000000000001L107.90000000000005,577.4000000000001L110.20000000000005,575.9000000000001L112.90000000000005,575.0000000000001L115.40000000000005,574.8000000000001L117.90000000000005,574.4000000000001Z"
              className="sm_state_NGA2852"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.32162726973074535"
              strokeLinejoin="round"
              transform="matrix(0.3663,0,0,0.3663,0,0)"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": "1", "strokeLinejoin": "round", "fillOpacity": "1"}}
              fillOpacity="1"
            />
            <desc style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}>
             Created by Uchendu Precious. @allindeveloper
            </desc>
            <defs style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}} />
            <text
              x="13.954880952380952"
              y="213.71845238095236"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,8.8436,135.4398)"
              className="sm_label_24"
            >
              <tspan
                dy="7.632514880952357"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Ogun
              </tspan>
            </text>
            <text
              x="13.954880952380952"
              y="213.71845238095236"
              textAnchor="middle"
              font='10px "Arial"'
              stroke="none"
              fill="#d5ddec"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "textAnchor": "middle", font: "bold 22px Arial", cursor: "pointer", opacity: "1"}}
              strokeWidth="0"
              fontSize="22px"
              fontWeight="bold"
              fontSize="Arial"
              opacity="1"
              transform="matrix(0.3663,0,0,0.3663,8.8436,135.4398)"
              className="sm_label_61"
            >
              <tspan
                dy="7.632514880952357"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Ogun
                           </tspan>
            </text>
          </svg>
        </a>
      </div>
    )
  }
}
const state = "State Info";
    const val = 55;
const abiaData =
      '<div class="hoverinfo">' +
      "<h6>" +
      state +
      " </h6>" +
      "Total No Of Farms - " +
      val +
      "" +
      "</div>";
Ogun.defaultProps = {
  hoverColor:"red",
  hoverBackgroundColor:"grey",
  renderData:abiaData,
  defaultColor:"green",
  id:"ogu"
};

Ogun.propTypes = {
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string.isRequired,
  renderData: PropTypes.string.isRequired,
  defaultColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Ogun;
