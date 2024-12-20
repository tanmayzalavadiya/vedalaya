import React, { useState, useEffect } from 'react';

export default function Achievement() {
  const [counts, setCounts] = useState({
    countries: 0,
    patientsTreated: 0,
    guinnessRecordHolder: 0,
    studentsTrained: 0,
  });

  // Define the target numbers
  const targets = {
    countries: 28,
    patientsTreated: 22000,
    guinnessRecordHolder: 0,
    studentsTrained: 700,
  };

  // Total time for the countdown in milliseconds
  const totalTime = 2000; // 2 seconds
  const incrementDuration = 50; // Update every 50ms

  useEffect(() => {
    const countdown = () => {
      const startTime = Date.now();

      const interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;

        if (elapsedTime >= totalTime) {
          // End the countdown and set all counts to targets
          setCounts(targets);
          clearInterval(interval);
        } else {
          const progress = elapsedTime / totalTime; // Progress percentage (0 to 1)
          setCounts({
            countries: Math.round(targets.countries * progress),
            patientsTreated: Math.round(targets.patientsTreated * progress),
            guinnessRecordHolder: Math.round(targets.guinnessRecordHolder * progress),
            studentsTrained: Math.round(targets.studentsTrained * progress),
          });
        }
      }, incrementDuration);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        countdown(); // Start countdown when in view
        observer.disconnect(); // Stop observing after starting countdown
      }
    });

    const achievementSection = document.getElementById('achievement');
    if (achievementSection) {
      observer.observe(achievementSection);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="achievement" className="max-w-screen-xl mx-auto p-4 mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <h3 className="text-4xl font-bold">{counts.countries}</h3>
          <p className="text-sm">Countries</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold">{counts.patientsTreated}+</h3>
          <p className="text-sm">Patients Treated</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold">{counts.guinnessRecordHolder}x</h3>
          <p className="text-sm">Guinness Record Holder</p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold">{counts.studentsTrained}+</h3>
          <p className="text-sm">Students Trained</p>
        </div>
      </div>
    </div>
  );
}
