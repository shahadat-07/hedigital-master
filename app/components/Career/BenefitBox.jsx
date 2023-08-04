import React, {useEffect, useState} from "react";
import { benefits } from "../../const";
import { findMaxTitleLength } from '../../utils/index';

const BenefitBox = ({ title, number, color }) => {
  const [maxTitleLength, setMaxTitleLength] = useState(0);

  useEffect(() => {
    setMaxTitleLength(findMaxTitleLength(benefits));
  }, []);

  return (
    <div className="p-2 relative">
      <div className={`absolute -top-[8%] left-[45%] ${color} rounded-full w-10 h-10 text-white] flex justify-center items-center font-bold text-white`}> {number} </div>
      <div className="border-2 border-[#ffc61b] text-center p-3">
        <div>
          <h2
            style={{
              fontFamily: "Roboto",
              height: `${(maxTitleLength / 30) * 26}px`
            }}
            className="text-xl font-semibold py-3"
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BenefitBox;
