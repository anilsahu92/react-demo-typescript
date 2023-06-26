import React from "react";

export interface User {
  id: number;
  name: string;
}

interface Props {
  data: User;
}

const SimgleUser = (props: Props) => {
  const { name, id } = props.data;

  return (
    <div>
      {id}. {name}
    </div>
  );
};

export default SimgleUser;
