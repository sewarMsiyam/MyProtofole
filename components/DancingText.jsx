"use client";

import React, { useState, useEffect } from "react";

const DancingText = () => {
  const text = "Front-end Developer!";
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const totalDuration = text.length * 0.2 + 1.5; // (تأخير لكل حرف * عدد الحروف) + مدة الحركة الواحدة
    const timer = setTimeout(() => {
      setAnimate(false); // أوقف الحركة مؤقتًا
      setTimeout(() => setAnimate(true), 100); // أعد تشغيل الحركة بعد توقف قصير
    }, totalDuration * 1000);

    return () => clearTimeout(timer); // تنظيف المهلة عند إزالة المكون
  }, [animate, text.length]);

  return (
    <div
    className="justify-center xl:justify-start"
      style={{
        fontSize: "24px",
        display: "flex",
        gap: "4px",
      }}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            animation: animate
              ? `dance 1.5s ease-in-out`
              : "none", // أوقف الحركة عند الانتهاء
            animationDelay: `${i * 0.2}s`, // تأخير لكل حرف
          }}
        >
          {char}
        </span>
      ))}
      <style jsx>{`
        @keyframes dance {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px); /* حركة أكبر لأعلى */
          }
        }
      `}</style>
    </div>
  );
};

export default DancingText;
