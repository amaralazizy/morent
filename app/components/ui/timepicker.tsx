"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const hours = Array.from({ length: 12 }, (_, i) =>
  (i + 1).toString().padStart(2, "0")
);
const minutes = Array.from({ length: 60 }, (_, i) =>
  i.toString().padStart(2, "0")
);
const periods = ["AM", "PM"];

export default function TimePicker({
  onChange,
}: {
  onChange?: (time: string) => void;
}) {
  const [selectedHour, setSelectedHour] = useState("12");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const [selectedPeriod, setSelectedPeriod] = useState("AM");

  const handleTimeChange = () => {
    const time = `${selectedHour}:${selectedMinute} ${selectedPeriod}`;
    if (onChange) onChange(time);
  };

  useEffect(handleTimeChange, [selectedHour, selectedMinute, selectedPeriod]);

  return (
    <div className="flex space-x-4 bg-white p-4 rounded-xl shadow-lg">
      <TimeColumn
        data={hours}
        selected={selectedHour}
        onChange={setSelectedHour}
      />
      <TimeColumn
        data={minutes}
        selected={selectedMinute}
        onChange={setSelectedMinute}
      />
      <TimeColumn
        data={periods}
        selected={selectedPeriod}
        onChange={setSelectedPeriod}
      />
    </div>
  );
}

function TimeColumn({
  data,
  selected,
  onChange,
}: {
  data: string[];
  selected: string;
  onChange: (value: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLDivElement[];
    const middle = container.clientHeight / 2;
    let closest = children[0];

    children.forEach((child) => {
      const box = child.getBoundingClientRect();
      const diff = Math.abs(box.top + box.height / 2 - middle);
      if (
        diff <
        Math.abs(
          closest.getBoundingClientRect().top +
            closest.clientHeight / 2 -
            middle
        )
      ) {
        closest = child;
      }
    });

    onChange(closest.dataset.value!);
  };

  return (
    <div className="relative w-20 h-32 overflow-hidden">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="h-full w-full overflow-y-scroll no-scrollbar snap-y snap-mandatory scroll-smooth"
      >
        <div className="h-[40px]" /> {/* Spacing for center alignment */}
        {data.map((item) => (
          <motion.div
            key={item}
            data-value={item}
            className={`text-center text-xl transition-all snap-center py-2 ${
              item === selected
                ? "text-black scale-110"
                : "text-gray-400 opacity-50"
            }`}
            style={{
              transform: `perspective(200px) rotateX(${
                item === selected ? "0deg" : "30deg"
              }) translateZ(${item === selected ? "20px" : "0px"})`,
            }}
          >
            {item}
          </motion.div>
        ))}
        <div className="h-[40px]" /> {/* Spacing for center alignment */}
      </div>
    </div>
  );
}
