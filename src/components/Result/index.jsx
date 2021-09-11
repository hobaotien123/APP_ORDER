// libs
import React from "react";
import { Result as ResultAntd, Button } from "antd";
import { SmileOutlined } from "@ant-design/icons";
// others
import "./style.scss";
/**
 * Result
 */

const Result = () => (
  <div className="result-wrapper">
    <ResultAntd
    icon={<SmileOutlined />}
    title="Great, we have done all the operations!"
    extra={<Button type="primary">Next</Button>}
  />,
  </div>
);

export default Result;
