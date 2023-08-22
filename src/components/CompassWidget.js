// import React, { useEffect } from 'react';

// const CompassWidget = () => {
//   useEffect(() => {
//     const compassContainer = document.getElementById('compass-container');
//     const compassNeedle = document.getElementById('compass-needle');

//     if (compassContainer && compassNeedle) {
//       // Calculate the Qibla direction in degrees (example: 135 degrees)
//       const qiblaDirectionDegrees = 135;
//       compassNeedle.style.transform = `rotate(${qiblaDirectionDegrees}deg)`;
//     }
//   }, []);

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md">
//       <h2 className="text-xl font-semibold mb-2">Qibla Compass</h2>
//       <div id="compass-container" className="compass-container">
//         <div id="compass-needle" className="compass-needle"></div>
//       </div>
//       <p className="text-lg mt-2 text-center">
//         Use the compass to find the Qibla direction.
//       </p>
//     </div>
//   );
// };

// export default CompassWidget;