type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn?: boolean;
};

const Greet = (props: GreetProps) => {
  return <div>Greet : {props.name}</div>;
};

export default Greet;
