import { Provider } from "react-redux";
import store from "../store/configureStore";

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
