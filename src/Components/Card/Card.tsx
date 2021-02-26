import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import "./index.css";

interface CardsProps {
  city: CityInfo;
}

const Card: React.FC<CardsProps> = ({
  city: { picture, title, adress, stats, activated },
}) => {
  const [checkbox, setCheckbox] = useState(activated);

  const handleChange = () => {
    setCheckbox(!checkbox);
  };
  return (
    <div className="card-container shadow border-1 bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <div>
        <img
          className="h-48 w-full object-cover object-center"
          src={picture}
          alt="city"
        />
      </div>
      <div className="h-1/6 pt-3 flex place-content-between m-4">
        <div className="flex flex-col">
          <h1 className="font-title font-bold text-xl text-secondary">
            {title}
          </h1>
          <p className="font-sans font-medium text-secondary">{adress}</p>
        </div>
        <div className="flex place-items-center">
          <Switch
            checked={checkbox}
            onChange={handleChange}
            color="primary"
            name="checkedB"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>
      </div>
      <div className="w-full line-separator" />
      <div className="h-1/4 flex place-content-around place-items-center">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="font-sans font-normal text-secondary">
              {stat.statValue}
            </p>
            <p className="font-sans font-normal text-secondary">
              {stat.statLabel}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
