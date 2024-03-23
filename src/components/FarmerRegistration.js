import React from "react";

export default function FarmerRegistration({ val }) {
  const url1 =
    "https://img.freepik.com/free-photo/farmer-working-outdoors-harvesting-wheat-sunset-generated-by-ai_188544-21578.jpg";
  const url2 =
    "https://i0.wp.com/sitn.hms.harvard.edu/wp-content/uploads/2018/04/DanUtter_JordanWilkerson_CoverPhoto.jpg?resize=1500%2C768&ssl=1";
  const url3 =
    "https://totalfood.com/wp-content/uploads/2023/05/food-trends-1.webp";

    const arr = [url1, url2, url3];

  return (
    <div className="farmer-reg" style={{ backgroundImage: `url(${arr[val-1]})` }}>
      <h2 className="signup">
        {val === 1 && "Farmer's "}
        {val === 2 && "Industry "}
        {val === 3 && "Restaurant "}Sign up
      </h2>
      <form>
        <div className="details">
          <label>
            {val === 1 && "Farmer's "}
            {val === 2 && "Industry "}
            {val === 3 && "Restaurant "} Name
          </label>
          <input type="text" />
        </div>
        <div className="details">
          <label>Email </label>
          <input type="email" />
        </div>
        <div className="details">
          <label>Phone number</label>
          <input type="text" />
        </div>
        <div className="details">
          <label>Set Password</label>
          <input type="password" />
        </div>
        <div className="details">
          <label>Confirm Password</label>
          <input type="password" />
        </div>
        <div className="check-box">
          <input type="checkbox" />
          <label>Agree terms and conditions</label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
