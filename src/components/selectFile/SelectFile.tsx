import { BsGithub, BsTwitter } from "react-icons/bs";

import FilePicker from "./FilePicker";

const SelectFile = () => {
  return (
    <>
      <header className="flex items-center justify-between gap-2 max-w-6xl mx-auto px-4 py-4 w-full">
        <svg className="w-44 md:w-52" viewBox="0 0 512 86">
          <title>Analyze.Golf Logo</title>
          <path
            className="fill-current"
            d="M137.399414,62 L133.918945,51.9013672 L119.416992,51.9013672 L115.910156,62 L109.845703,62 L123.583008,23.9521484 L129.9375,23.9521484 L143.674805,62 L137.399414,62 Z M126.457031,30.8603516 L120.919922,46.9443359 L132.416016,46.9443359 L126.905273,30.8603516 L126.457031,30.8603516 Z M156.041016,62 L150.292969,62 L150.292969,23.9521484 L155.619141,23.9521484 L175.157227,50.9785156 L175.579102,50.9785156 L175.579102,23.9521484 L181.327148,23.9521484 L181.327148,62 L176.000977,62 L156.462891,34.9736328 L156.041016,34.9736328 L156.041016,62 Z M215.499023,62 L212.018555,51.9013672 L197.516602,51.9013672 L194.009766,62 L187.945312,62 L201.682617,23.9521484 L208.037109,23.9521484 L221.774414,62 L215.499023,62 Z M204.556641,30.8603516 L199.019531,46.9443359 L210.515625,46.9443359 L205.004883,30.8603516 L204.556641,30.8603516 Z M252.123047,56.5683594 L252.123047,62 L228.392578,62 L228.392578,23.9521484 L234.298828,23.9521484 L234.298828,56.5683594 L252.123047,56.5683594 Z M270.922852,62 L265.016602,62 L265.016602,46.6542969 L251.62207,23.9521484 L258.1875,23.9521484 L267.758789,40.4316406 L268.207031,40.4316406 L277.77832,23.9521484 L284.34375,23.9521484 L270.922852,46.6542969 L270.922852,62 Z M289.933594,62 L289.933594,57.7548828 L310.605469,29.7792969 L310.605469,29.3310547 L290.566406,29.3310547 L290.566406,23.9521484 L318.014648,23.9521484 L318.014648,28.1972656 L297.448242,56.1728516 L297.448242,56.6210938 L318.515625,56.6210938 L318.515625,62 L289.933594,62 Z M351.131836,56.6210938 L351.131836,62 L326.979492,62 L326.979492,23.9521484 L351.131836,23.9521484 L351.131836,29.3310547 L332.885742,29.3310547 L332.885742,40.0888672 L350.15625,40.0888672 L350.15625,45.2041016 L332.885742,45.2041016 L332.885742,56.6210938 L351.131836,56.6210938 Z M363.392578,62.4482422 C361.177734,62.4482422 359.516602,60.734375 359.516602,58.5195312 C359.516602,56.3046875 361.177734,54.5908203 363.392578,54.5908203 C365.633789,54.5908203 367.268555,56.3046875 367.268555,58.5195312 C367.268555,60.734375 365.633789,62.4482422 363.392578,62.4482422 Z M406.001953,46.9443359 C406.001953,56.6738281 399.541992,62.9228516 389.575195,62.9228516 C378.791016,62.9228516 371.988281,55.25 371.988281,42.9628906 C371.988281,30.8339844 378.870117,23.0292969 389.522461,23.0292969 C398.170898,23.0292969 404.446289,27.9335938 405.738281,35.6328125 L399.805664,35.6328125 C398.329102,31.0449219 394.716797,28.5400391 389.522461,28.5400391 C382.482422,28.5400391 378.026367,34.1035156 378.026367,42.9101562 C378.026367,51.875 382.508789,57.4121094 389.654297,57.4121094 C395.876953,57.4121094 400.148438,53.6152344 400.201172,47.9726562 L400.201172,47.1552734 L390.392578,47.1552734 L390.392578,42.1982422 L406.001953,42.1982422 L406.001953,46.9443359 Z M430.338867,23.0292969 C441.28125,23.0292969 448.083984,30.7021484 448.083984,42.9628906 C448.083984,55.1972656 441.333984,62.9228516 430.338867,62.9228516 C419.264648,62.9228516 412.567383,55.2236328 412.567383,42.9628906 C412.567383,30.6757812 419.422852,23.0292969 430.338867,23.0292969 Z M430.338867,28.5400391 C423.140625,28.5400391 418.605469,34.1298828 418.605469,42.9628906 C418.605469,51.7431641 423.008789,57.4121094 430.338867,57.4121094 C437.563477,57.4121094 442.045898,51.7431641 442.045898,42.9628906 C442.045898,34.1298828 437.537109,28.5400391 430.338867,28.5400391 Z M479.803711,56.5683594 L479.803711,62 L456.073242,62 L456.073242,23.9521484 L461.979492,23.9521484 L461.979492,56.5683594 L479.803711,56.5683594 Z M493.171875,62 L487.265625,62 L487.265625,23.9521484 L511.022461,23.9521484 L511.022461,29.3310547 L493.171875,29.3310547 L493.171875,41.0117188 L509.519531,41.0117188 L509.519531,46.2324219 L493.171875,46.2324219 L493.171875,62 Z"
          />
          <circle className="fill-brand-blue" cx="43" cy="43" r="43" />
          <g transform="translate(21.000000, 19.000000)" className="fill-white">
            <path d="M8.90529177,4.9399016 L13.6119873,7.81169775 C12.8843573,10.777966 15.0328975,13.6973823 18.0080551,13.6973823 C19.2206489,13.6973823 20.3220666,13.2027482 21.1361259,12.3970476 L23.7799717,14 L26.6,12.3071841 L22.4754084,9.8059794 C22.965543,6.92035798 20.8362093,4.26323602 18.0080551,4.26323602 C16.9188261,4.26323602 15.9193504,4.66262998 15.1370558,5.32815855 L6.73606754,0.202474773 C6.23669906,-0.102063097 5.63169499,-0.0521389013 5.19068462,0.278897296 L1.11226253,3.81276574 C0.30595971,4.51055305 0.479926119,5.83661788 1.43434043,6.28824028 C3.7705132,7.39348621 6.49340108,7.03518377 8.53667505,5.25980078 L8.90529177,4.9399016 Z" />
            <path d="M42.9280612,21.3856127 L37.3373668,18 C36.9598318,18.8503416 36.3727119,19.6123884 35.6,20.1941818 L41.5706992,23.809874 C42.2153315,24.1989576 43.0420273,23.971809 43.4167397,23.3024535 C43.7918049,22.6330979 43.5726934,21.7746962 42.9280612,21.3856127 L42.9280612,21.3856127 Z" />
            <path d="M34.2308288,13.4246548 C33.468774,12.0654967 31.7650603,11.5953618 30.4450789,12.3800341 L25.0915806,15.5629148 L17.4753601,15.5629148 C15.7528926,15.5629148 14.7037597,16.5681718 14.7037597,18.4164039 L14.7091695,36.4750087 L9.23052538,43.312019 C8.26037516,44.5230065 8.42879904,46.3307609 9.60452018,47.3297049 C10.7802413,48.3282775 12.5358887,48.1552262 13.5060389,46.9446102 L20.2465997,38.5323134 L20.2465997,45.1465109 C20.2465997,46.7158557 21.4937296,48 23.0182,48 C24.5423096,48 25.7894396,46.7158557 25.7894396,45.1465109 L25.7894396,24.1241247 L22.0942131,24.1241247 C21.3289123,24.1241247 20.7085932,23.4850233 20.7085932,22.6970088 C20.7085932,21.9089942 21.3289123,21.2702643 22.0942131,21.2702643 L25.7894396,21.2695216 C26.2748755,21.2784341 26.7675242,21.1570011 27.2161736,20.8899971 L33.2166793,17.3231358 C34.5366606,16.5380921 34.9928837,14.7841841 34.2308288,13.4246548 Z" />
          </g>
        </svg>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/tlouth19/analyze.golf"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Analyze.Golf on GitHub"
            className="text-xl"
          >
            <BsGithub />
          </a>
          <a
            href="https://twitter.com/AnalyzeGolf"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Analyze.Golf on Twitter"
            className="text-xl"
          >
            <BsTwitter />
          </a>
        </div>
      </header>
      <section className="max-w-6xl mx-auto px-4 flex-auto flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase mb-1">
            Free Golf Swing Analyzer
          </h1>
          <p className="text-sm sm:text-base md:text-lg uppercase font-semibold mb-6">
            No ads. No video upload. No app download.
          </p>
          <FilePicker />
        </div>
      </section>
      <footer className="flex items-center justify-center gap-2 mx-auto px-4 py-4 w-full text-center">
        <p className="text-xs sm:text-sm">
          Built with{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            React
          </a>
          ,{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Tailwind
          </a>{" "}
          and{" "}
          <a
            href="https://konvajs.org/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Konva.js
          </a>{" "}
          by{" "}
          <a
            href="https://tysonlouth.com"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Tyson Louth
          </a>
          . <br className="sm:hidden" />
          View this project on{" "}
          <a
            href="https://github.com/tlouth19/analyze.golf"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Analyze.Golf on GitHub"
            className="underline"
          >
            GitHub
          </a>
          .
        </p>
      </footer>
    </>
  );
};

export default SelectFile;
