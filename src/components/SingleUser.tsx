import React from "react";

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface Props {
  data: User;
}

const SimgleUser = (props: Props) => {
  const { name, id, email, phone } = props.data;

  return (
    <div className="d-flx">
      {id}. {name}, <b>{email}</b>, <span>{phone}</span>
    </div>
  );
};

export default SimgleUser;
