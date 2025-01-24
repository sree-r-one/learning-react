type Props = {
  firstName: string;
  lastName: string;
};

const Person = (props: Props) => {
  return (
    <div>
      <h3>Person</h3>
      name : {props.firstName} {props.lastName}
    </div>
  );
};

export default Person;
