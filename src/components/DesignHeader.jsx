export const DesignHeader = () => {
  return (
    <div className="absolute w-full h-full bg-[#431273] z-0 top-0">
      <div className="w-full h-full relative">
        <div className="absolute top-[-180px] right-[160px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="400"
            viewBox="50 -10 100 220"
            fill="none"
          >
            <circle
              cx="100"
              cy="100"
              r="100"
              stroke="#512F73"
              stroke-width="3"
            />
          </svg>
        </div>
        <div className="absolute top-[500px] right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="142"
            height="200"
            viewBox="10 -10 100 220"
            fill="none"
          >
            <circle
              cx="100"
              cy="100"
              r="97"
              stroke="#512F73"
              stroke-width="6"
            />
          </svg>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#431273"
          fill-opacity="1"
          d="M0,128L60,154.7C120,181,240,235,360,224C480,213,600,139,720,112C840,85,960,107,1080,133.3C1200,160,1320,192,1380,208L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};
