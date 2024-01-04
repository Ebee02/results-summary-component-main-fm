import "./index.css";
import "./App.css";

function App() {
  return (
    <>
      <main className="antialiased flex justify-center text-[18px]">
        <div className="main-container w-[350px] md:w-[1000px] flex flex-col md:flex-row md:gap-x-2 items-center m-6">
          <div className="first-container flex-1 w-full  md:h-[500px] rounded-b-3xl border-none flex flex-col items-center py-4 px-6 text-white">
            <h3 className="font-semibold text tracking-wide mb-4 text-[#c8c7ff]">
              Your Result
            </h3>
            <div className="circle w-32 h-32 rounded-full border-none flex flex-col items-center justify-center cursor-pointer p-6 m-4 shadow-sm">
              <h1 className="text-6xl font-bold mb-1">76</h1>
              <span className="text-lg text-[#c8c7ff] font-semibold">
                of 100
              </span>
            </div>
            <h2 className="font-semibold text-xl mb-2">Great</h2>
            <h3 className="text-[15px] text-center tracking-wide font-medium text-[#c8c7ff] mb-2">
              You scored higher than 65% of the
              <br /> people who have taken these tests.
            </h3>
          </div>
          <div className="second-container flex-1 w-full mt-2 p-4">
            <h2 className="font-semibold text-lg tracking-wide mb-3 text-[#303b5a]">
              Summary
            </h2>
            <div className="stats bg-[#faf0f0] border-none p-4 flex items-center justify-between mb-5 rounded-lg shadow-gray-400 shadow-sm cursor-pointer">
              <div className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="#F55"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
                    d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"
                  />
                </svg>
                <h2 className="text-[#F55] text-base font-semibold">
                  Reaction
                </h2>
              </div>
              <p className="text-[#303b5a] font-bold">
                80 <span className="font-normal">/ 100</span>
              </p>
            </div>
            <div className="stats bg-[#f8f6ee] border-none p-4 flex items-center justify-between mb-5 rounded-lg shadow-gray-400 shadow-sm cursor-pointer">
              <div className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="#FFB21E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
                    d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"
                  />
                  <path
                    stroke="#FFB21E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
                    d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"
                  />
                  <path
                    stroke="#FFB21E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
                    d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"
                  />
                </svg>
                <h2 className="text-[#FFB21E] text-base font-semibold">
                  Memory
                </h2>
              </div>
              <p className="text-[#303b5a] font-bold">
                92 <span className="font-normal">/ 100</span>
              </p>
            </div>
            <div className="stats bg-[#effaf8] border-none p-4 flex items-center justify-between mb-5 rounded-lg shadow-gray-400 shadow-sm cursor-pointer">
              <div className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="#00BB8F"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
                    d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"
                  />
                </svg>
                <h2 className="text-[#00BB8F] text-base font-semibold">
                  Verbal
                </h2>
              </div>
              <p className="text-[#303b5a] font-bold">
                61 <span className="font-normal">/ 100</span>
              </p>
            </div>
            <div className="stats bg-[#dde0fc] border-none p-4 flex items-center justify-between mb-7 rounded-lg shadow-gray-400 shadow-sm cursor-pointer">
              <div className="flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="#1125D6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
                    d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
                  />
                  <path
                    stroke="#1125D6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.25"
                    d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"
                  />
                </svg>
                <h2 className="text-[#1125D6] text-base font-semibold">
                  Visual
                </h2>
              </div>
              <p className="text-[#303b5a] font-bold">
                72 <span className="font-normal">/ 100</span>
              </p>
            </div>

            <button className="btn bg-[#303b5a] text-white w-full font-semibold text-base py-3 rounded-full">
              Continue
            </button>
          </div>
        </div>

        {/* <div class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>   */}
      </main>
    </>
  );
}

export default App;
