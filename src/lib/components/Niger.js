import React, { Component } from "react";

class Niger extends Component {
  constructor(props) {
    super(props);
    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();

    this.state = {
      ...props
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
          <span id={this.state.id} ref={this.myRef1}>Niger State</span>
          <svg
            height="300.0226150793651"
            version="1.1"
            width="369.2"
            xmlns="http://www.w3.org/2000/svg"
            style={{overflow: "hidden", position: "relative", left: "-0.2px", top: "0.6px"}}
            viewBox="24.833819653560568 78.99034591951258 120.64783688335504 98.04192720859386"
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
              strokeWidth="0.8921886358665296"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", "fillOpacity": "0"}}
              fillOpacity="0"
            />
            <path
              fill="#88a4bc"
               stroke="#ffffff"id={this.state.id}ref={this.myRef2}
              d="M280.1,237.1L283.6,241.79999999999998L290,252.6L291.3,258.2L289.6,259L288,260.9L287.3,263L286.8,270.1L286.90000000000003,272.20000000000005L288.3,276.50000000000006L288.40000000000003,278.50000000000006L288.00000000000006,280.40000000000003L286.80000000000007,283.3L286.6000000000001,284.3L286.4000000000001,287.7L285.9000000000001,288.7L285.6000000000001,290.4L286.1000000000001,293.29999999999995L288.80000000000007,295.29999999999995L290.9000000000001,297.79999999999995L292.30000000000007,300.69999999999993L295.20000000000005,300.29999999999995L297.30000000000007,297.9L299.1000000000001,295.09999999999997L303.4000000000001,290.4L313.30000000000007,282.7L319.20000000000005,281.4L321.40000000000003,282.9L322.50000000000006,285.5L325.1000000000001,286L331.2000000000001,283.2L334.3000000000001,282.59999999999997L337.5000000000001,283.09999999999997L339.4000000000001,281.79999999999995L339.0000000000001,278.4L341.7000000000001,277.29999999999995L344.7000000000001,277.49999999999994L347.3000000000001,278.49999999999994L348.0000000000001,280.19999999999993L348.5000000000001,286.99999999999994L349.9000000000001,287.3999999999999L352.80000000000007,286.49999999999994L357.4000000000001,290.3999999999999L357.5000000000001,297.19999999999993L356.4000000000001,300.19999999999993L358.2000000000001,302.0999999999999L364.1000000000001,304.2999999999999L366.6000000000001,305.9999999999999L366.4000000000001,308.89999999999986L364.4000000000001,311.4999999999999L361.7000000000001,313.2999999999999L359.0000000000001,315.4999999999999L356.8000000000001,318.1999999999999L354.0000000000001,319.9999999999999L352.0000000000001,322.2999999999999L355.8000000000001,327.1999999999999L361.7000000000001,329.7999999999999L367.9000000000001,330.4999999999999L380.2000000000001,330.2999999999999L384.2000000000001,333.0999999999999L385.8000000000001,346.5999999999999L385.7000000000001,349.69999999999993L383.5000000000001,351.49999999999994L380.9000000000001,351.69999999999993L379.1000000000001,353.0999999999999L380.80000000000007,355.3999999999999L383.80000000000007,356.2999999999999L385.6000000000001,357.7999999999999L384.9000000000001,360.0999999999999L386.1000000000001,362.19999999999993L388.6000000000001,363.49999999999994L389.1000000000001,366.19999999999993L387.2000000000001,368.29999999999995L386.0000000000001,369.4L385.2000000000001,370.79999999999995L384.9000000000001,372.49999999999994L384.4000000000001,374.09999999999997L379.9000000000001,377.4L379.2000000000001,380.5L380.9000000000001,383.1L382.0000000000001,383.8L383.4000000000001,385.6L383.2000000000001,386.8L382.3000000000001,389.40000000000003L382.8000000000001,390.70000000000005L384.90000000000015,390.1L386.90000000000015,390.6L375.20000000000016,407.3L374.70000000000016,407.40000000000003L370.70000000000016,405.20000000000005L363.00000000000017,397.6L358.00000000000017,396.1L342.6000000000002,396.70000000000005L340.6000000000002,397.6L340.2000000000002,400L341.0000000000002,460.1L341.5000000000002,461.6L343.5000000000002,465.20000000000005L347.30000000000024,465.6L346.2000000000002,468.90000000000003L343.7000000000002,471.3L342.0000000000002,471.90000000000003L340.7000000000002,473.20000000000005L340.9000000000002,475.1L340.5000000000002,476.5L339.30000000000024,475.8L338.30000000000024,476.6L337.30000000000024,478.70000000000005L336.80000000000024,480.90000000000003L335.40000000000026,482.40000000000003L335.10000000000025,481.90000000000003L333.90000000000026,480.8L333.80000000000024,480.3L332.80000000000024,479.8L329.7000000000002,476.40000000000003L326.4000000000002,471.20000000000005L325.4000000000002,470.1L317.2000000000002,463.8L316.6000000000002,463.5L314.7000000000002,459.6L313.6000000000002,455.6L313.4000000000002,453.1L312.9000000000002,451.6L312.2000000000002,450.90000000000003L310.9000000000002,448.20000000000005L310.7000000000002,446.00000000000006L308.7000000000002,442.50000000000006L307.6000000000002,441.40000000000003L306.3000000000002,440.70000000000005L304.6000000000002,440.40000000000003L301.50000000000017,438.3L300.90000000000015,437.8L299.50000000000017,437.7L295.8000000000002,438.4L291.20000000000016,439.29999999999995L290.60000000000014,439.09999999999997L288.0000000000001,436.7L286.8000000000001,436.2L285.5000000000001,436L276.4000000000001,436.1L274.4000000000001,436.5L271.7000000000001,437.7L270.7000000000001,437.9L269.5000000000001,437.9L265.8000000000001,437.29999999999995L261.40000000000015,437.4L260.40000000000015,437.09999999999997L259.90000000000015,436.49999999999994L259.00000000000017,434.99999999999994L257.8000000000002,433.29999999999995L256.70000000000016,431.59999999999997L253.50000000000017,430.59999999999997L248.70000000000016,430.49999999999994L247.40000000000015,430.09999999999997L246.30000000000015,429.2L245.30000000000015,427.3L243.90000000000015,425.6L242.10000000000014,424.1L241.00000000000014,422.6L239.40000000000015,421.6L237.10000000000014,421L234.60000000000014,420.8L232.40000000000015,420.1L231.40000000000015,419.3L229.90000000000015,417.8L228.00000000000014,416.5L226.80000000000015,416.3L221.20000000000016,416.6L213.30000000000015,415.3L212.10000000000016,414.90000000000003L211.10000000000016,414.20000000000005L210.50000000000017,413.1L210.40000000000018,410.40000000000003L210.00000000000017,409.50000000000006L208.60000000000016,408.00000000000006L207.20000000000016,406.1000000000001L205.90000000000015,405.2000000000001L201.60000000000014,403.1000000000001L198.80000000000013,401.2000000000001L197.30000000000013,400.5000000000001L197.20000000000013,400.0000000000001L195.20000000000013,399.10000000000014L194.10000000000014,398.8000000000001L192.90000000000015,398.8000000000001L187.50000000000014,400.5000000000001L183.80000000000015,402.7000000000001L180.50000000000014,403.7000000000001L177.90000000000015,403.9000000000001L175.60000000000014,403.1000000000001L174.10000000000014,401.50000000000006L173.90000000000015,398.90000000000003L174.40000000000015,396.40000000000003L174.30000000000015,394.20000000000005L173.30000000000015,392.50000000000006L170.90000000000015,391.6000000000001L166.80000000000015,390.9000000000001L165.40000000000015,390.4000000000001L164.20000000000016,389.4000000000001L163.50000000000017,388.30000000000007L163.20000000000016,386.9000000000001L162.70000000000016,380.6000000000001L162.60000000000016,380.1000000000001L155.30000000000015,379.00000000000006L149.20000000000016,379.80000000000007L146.50000000000017,375.1000000000001L146.60000000000016,368.80000000000007L147.40000000000018,362.00000000000006L146.10000000000016,356.30000000000007L143.20000000000016,356.30000000000007L141.90000000000015,355.50000000000006L140.60000000000014,354.50000000000006L112.70000000000013,321.30000000000007L110.30000000000013,319.30000000000007L104.60000000000012,318.50000000000006L91.30000000000013,318.90000000000003L83.60000000000012,320.40000000000003L83.80000000000013,318.8L83.60000000000012,317.5L82.80000000000013,316.5L77.20000000000013,310.6L76.00000000000013,308.70000000000005L75.90000000000013,307.1L77.60000000000014,303.20000000000005L79.70000000000013,300.00000000000006L80.10000000000014,299.00000000000006L80.10000000000014,297.30000000000007L80.90000000000013,296.00000000000006L82.50000000000013,294.40000000000003L84.20000000000013,293.8L85.90000000000013,294.2L91.30000000000014,297L92.60000000000014,296.8L93.80000000000014,295.2L94.40000000000013,293.59999999999997L94.50000000000013,289.2L95.20000000000013,287L97.30000000000013,282.8L98.00000000000013,280.5L97.90000000000013,275.8L97.50000000000013,273.40000000000003L96.80000000000013,271.70000000000005L95.70000000000013,271.1L93.50000000000013,270.6L92.70000000000013,269.6L91.90000000000013,266.8L91.50000000000013,265.90000000000003L89.50000000000013,263.90000000000003L89.00000000000013,262.90000000000003L89.10000000000012,261.40000000000003L90.90000000000012,256.90000000000003L91.00000000000011,254.40000000000003L89.30000000000011,246.90000000000003L88.50000000000011,245.40000000000003L87.90000000000012,243.90000000000003L87.50000000000011,242.20000000000005L87.50000000000011,240.30000000000004L88.40000000000012,237.00000000000003L87.70000000000012,236.40000000000003L87.00000000000011,236.30000000000004L87.60000000000011,235.70000000000005L95.2000000000001,236.60000000000005L102.60000000000011,241.20000000000005L111.9000000000001,245.50000000000006L116.30000000000011,246.00000000000006L139.1000000000001,245.40000000000006L147.7000000000001,244.20000000000007L156.1000000000001,246.40000000000006L166.2000000000001,253.10000000000005L171.6000000000001,254.70000000000005L171.7000000000001,256.80000000000007L168.9000000000001,271.9000000000001L169.00000000000009,275.1000000000001L168.8000000000001,276.6000000000001L168.2000000000001,277.7000000000001L166.1000000000001,279.9000000000001L165.90000000000012,281.4000000000001L156.30000000000013,286.9000000000001L153.10000000000014,292.30000000000007L152.60000000000014,298.6000000000001L152.90000000000015,301.80000000000007L154.20000000000016,304.70000000000005L156.40000000000015,306.40000000000003L158.10000000000014,308.3L157.60000000000014,314.5L156.40000000000015,320.7L158.40000000000015,322.5L164.00000000000014,322.8L165.10000000000014,320.6L165.10000000000014,317.20000000000005L166.00000000000014,314.20000000000005L168.90000000000015,313.20000000000005L178.60000000000014,311.20000000000005L181.40000000000015,310.20000000000005L183.80000000000015,308.50000000000006L185.90000000000015,302.90000000000003L183.30000000000015,297.20000000000005L179.40000000000015,292.00000000000006L178.90000000000015,289.20000000000005L179.30000000000015,286.30000000000007L178.90000000000015,279.9000000000001L180.30000000000015,274.30000000000007L182.90000000000015,273.30000000000007L188.70000000000016,274.1000000000001L194.30000000000015,271.4000000000001L200.20000000000016,269.7000000000001L202.40000000000015,268.0000000000001L200.60000000000014,262.4000000000001L197.20000000000013,258.1000000000001L201.20000000000013,253.00000000000009L201.00000000000014,249.60000000000008L200.20000000000013,246.20000000000007L199.20000000000013,243.70000000000007L196.90000000000012,243.00000000000009L195.80000000000013,242.4000000000001L195.10000000000014,240.9000000000001L194.00000000000014,240.2000000000001L192.60000000000014,240.2000000000001L186.20000000000013,239.2000000000001L180.20000000000013,236.7000000000001L175.00000000000014,232.7000000000001L176.30000000000015,227.3000000000001L187.70000000000016,222.2000000000001L212.30000000000015,217.2000000000001L218.40000000000015,217.3000000000001L223.30000000000015,220.3000000000001L224.40000000000015,226.7000000000001L227.40000000000015,232.1000000000001L230.10000000000014,233.8000000000001L231.40000000000015,236.6000000000001L230.90000000000015,243.1000000000001L231.00000000000014,246.40000000000012L232.10000000000014,249.40000000000012L234.30000000000013,250.20000000000013L242.60000000000014,250.20000000000013L248.10000000000014,249.20000000000013L262.5000000000001,243.10000000000014L265.4000000000001,242.30000000000013L268.30000000000007,242.0000000000001L270.4000000000001,240.30000000000013L271.30000000000007,239.0000000000001L273.4000000000001,236.6000000000001L274.6000000000001,235.6000000000001L277.50000000000006,235.5000000000001L280.1000000000001,237.1000000000001Z"
              className="sm_state_NGA2851"
              opacity="1"
              strokeOpacity="1"
              strokeWidth="0.6176175831786052"
              strokeLinejoin="round"
              transform="matrix(0.3663,0,0,0.3663,0,0)"
              style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)", opacity: "1", cursor: "pointer", "strokeOpacity": 1, "strokeLinejoin": "round", "fillOpacity": "1"}}
              fillOpacity="1"
            />
            <desc style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}>
             Created by Uchendu Precious. @allindeveloper
            </desc>
            <defs style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}} />
            <text
              x="88.30765873015872"
              y="126.80261904761903"
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
              transform="matrix(0.3663,0,0,0.3663,55.9632,80.3586)"
              className="sm_label_25"
            >
              <tspan
                dy="7.513556547619032"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Niger
              </tspan>
            </text>
            <text
              x="88.30765873015872"
              y="126.80261904761903"
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
              transform="matrix(0.3663,0,0,0.3663,55.9632,80.3586)"
              className="sm_label_62"
            >
              <tspan
                dy="7.513556547619032"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Niger
              </tspan>
            </text>
            <text
              x="88.30765873015872"
              y="126.80261904761903"
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
              transform="matrix(0.3663,0,0,0.3663,55.9632,80.3586)"
              className="sm_label_99"
            >
              <tspan
                dy="7.513556547619032"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Niger
              </tspan>
            </text>
            <text
              x="88.30765873015872"
              y="126.80261904761903"
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
              transform="matrix(0.3663,0,0,0.3663,55.9632,80.3586)"
              className="sm_label_136"
            >
              <tspan
                dy="7.513556547619032"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Niger
              </tspan>
            </text>
            <text
              x="88.30765873015872"
              y="126.80261904761903"
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
              transform="matrix(0.3663,0,0,0.3663,55.9632,80.3586)"
              className="sm_label_173"
            >
              <tspan
                dy="7.513556547619032"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Niger
              </tspan>
            </text>
            <text
              x="88.30765873015872"
              y="126.80261904761903"
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
              transform="matrix(0.3663,0,0,0.3663,55.9632,80.3586)"
              className="sm_label_210"
            >
              <tspan
                dy="7.513556547619032"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Niger
              </tspan>
            </text>
            <text
              x="88.30765873015872"
              y="126.80261904761903"
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
              transform="matrix(0.3663,0,0,0.3663,55.9632,80.3586)"
              className="sm_label_247"
            >
              <tspan
                dy="7.513556547619032"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Niger
              </tspan>
            </text>
            <text
              x="88.30765873015872"
              y="126.80261904761903"
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
              transform="matrix(0.3663,0,0,0.3663,55.9632,80.3586)"
              className="sm_label_282"
            >
              <tspan
                dy="7.513556547619032"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Niger
              </tspan>
            </text>
            <text
              x="88.30765873015872"
              y="126.80261904761903"
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
              transform="matrix(0.3663,0,0,0.3663,55.9632,80.3586)"
              className="sm_label_319"
            >
              <tspan
                dy="7.513556547619032"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Niger
              </tspan>
            </text>
            <text
              x="88.30765873015872"
              y="126.80261904761903"
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
              transform="matrix(0.3663,0,0,0.3663,55.9632,80.3586)"
              className="sm_label_356"
            >
              <tspan
                dy="7.513556547619032"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Niger
              </tspan>
            </text>
            <text
              x="88.30765873015872"
              y="126.80261904761903"
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
              transform="matrix(0.3663,0,0,0.3663,55.9632,80.3586)"
              className="sm_label_393"
            >
              <tspan
                dy="7.513556547619032"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Niger
              </tspan>
            </text>
            <text
              x="88.30765873015872"
              y="126.80261904761903"
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
              transform="matrix(0.3663,0,0,0.3663,55.9632,80.3586)"
              className="sm_label_430"
            >
              <tspan
                dy="7.513556547619032"
                style={{"WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"}}
              >
                Niger
              </tspan>
            </text>
          </svg>
        </a>
      </div>
    );
  }
}

export default Niger;
