import { Result, Button } from "antd";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="sorry"
      extra={
        <Button type="primary">
          <Link to="/">На главную</Link>
        </Button>
      }
    />
  );
};
