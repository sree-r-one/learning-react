type Props = {
  names: {
    firstName: string;
    lastName: string;
  }[];
};

const Personlist = (props: Props) => {
  return (
    <div>
      <h3>Person List</h3>
      {props.names.map((name, index) => (
        <div key={index}>
          <p>
            {name.firstName} {name.lastName}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Personlist;
