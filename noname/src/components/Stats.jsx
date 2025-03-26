import React from "react";
import CountUp from "../Bits/CountUp";

const Stats = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-4xl font-bold">
                <CountUp
                  from={0}
                  to={100}
                  separator=",..."
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                <span>+</span>
              </div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-4xl font-bold">
                <CountUp
                  from={0}
                  to={50}
                  separator=",..."
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                <span>+</span>
              </div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-4xl font-bold">
                <CountUp
                  from={0}
                  to={15}
                  separator=",..."
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                <span>+</span>
              </div>
              <p className="text-muted-foreground">Team Members</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="text-4xl font-bold">
                <CountUp
                  from={0}
                  to={5}
                  separator=",..."
                  direction="up"
                  duration={0.5}
                  className="count-up-text"
                />
                <span>+</span>
              </div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
