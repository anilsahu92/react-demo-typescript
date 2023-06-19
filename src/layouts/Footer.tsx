import React from "react";

interface Props {
  year: number;
  text?: string;
}

const Footer: React.FC<Props> = (props: Props): JSX.Element => {
  const { year } = props;
  return (
    <div className="footer text-center">
      <small className="">Copyright {year}. All right reserved.</small>
    </div>
  );
};

export default Footer;
