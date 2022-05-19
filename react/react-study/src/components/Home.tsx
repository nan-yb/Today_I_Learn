import React from "react";
import okinawa from '@assets/main/okinawa.png';

function Home() {
  return (
    <div>
      <div className="container mx-auto my-4 max-w-screen-xl">
        <img
          src={okinawa}
          alt=""
          className="mx-auto justify-center items-end pb-4 flex rounded-3xl "
        />
        {/* <TabUI prop={boardList} /> */}
      </div>
    </div>
  );
}

export default Home;
