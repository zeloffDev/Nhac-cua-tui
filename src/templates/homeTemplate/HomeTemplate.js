import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import CpnSkeleton from "../../Component/CpnSkeleton";
import LayOut2 from "./layout/LayOut2";

export const HomeTemplate = ({ Component, ...restProps }) => {
  const { toggle } = useSelector((state) => state.SkeletonReducer);
  const toggleCss=toggle?'hidden':''
  return (
    <Route
      {...restProps}
      render={(props) => {
        return (
          <div >
            <LayOut2>
              {toggle ? <CpnSkeleton /> : ''}
              <div className={`${toggleCss} p-5`}>
                <Component {...props} />
              </div>
            </LayOut2>
          </div>
        );
      }}
    />
  );
};
