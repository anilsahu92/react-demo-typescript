import { Link } from "react-router-dom";

interface Props {}

const Header: React.FC<Props> = (props: Props): JSX.Element => {
  //const {} = props;
  //const [count, setCount] = useState<number>(0);

  return (
    <div className="header">
      <div className="container">
        <div className="row-flex">
          <div className="logo">Logo </div>
          <div className="menu-list">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/product">Products</Link>
              </li>
              <li>
                <Link to="/todo">Todo</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
