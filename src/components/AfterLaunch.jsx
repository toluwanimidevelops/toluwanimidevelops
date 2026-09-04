import { GiCancel } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const AfterLaunch = () => {
  const plans = [
    {
      name: "STARTER",
      price: "₦50,000",
      description:
        "Best for post-launch sites & apps needing background stability.",
      dotClass: "bg-neutral-600",
      innerBorderClass: "border-neutral-600 border-1",
      buttonClass:
        "border border-neutral-700 hover:border-blue-800 hover:bg-blue-800 duration-1000 bg-transparent",
      features: [
        {
          text: "Core dependency, framework & library updates",
          included: true,
        },
        { text: "Continuous health, uptime & SSL monitoring", included: true },
        {
          text: "Essential security patching & vulnerability fixes",
          included: true,
        },
        { text: "Email support (48-hr response)", included: true },
        
      ],
    },
    {
      name: "PRO",
      price: "₦100,000",
      description:
        "Best for growing products needing regular tweaks & optimizations.",
      dotClass: "bg-blue-600",
      innerBorderClass: "border-blue-700 border-1",
      buttonClass: "bg-blue-700 duration-1000 hover:bg-blue-800",
      features: [
        {
          text: "Everthing in starter",
          included: true,
        },
        { text: "Priority email & chat support (24-hr turnaround)", included: true },
        { text: "Bug resolution & UI adjustments", included: false },
        {
          text: "Speed, database & frontend performance tuning",
          included: true,
        },
        {
          text: "Automated weekly backups & monthly status report",
          included: true,
        },
      ],
    },
    {
      name: "ENTERPRISE",
      price: "₦250,000",
      description:
        "Best for mission-critical software needing active development & scale.",
      dotClass: "bg-blue-200",
      innerBorderClass: "border-neutral-600 border-1",
      buttonClass:
        "border border-neutral-700 hover:border-blue-800 hover:bg-blue-800 duration-1000 bg-transparent",
      features: [
        { text: "Full dashboard access", included: true },
        { text: "Advanced workflow automation", included: true },
        { text: "Priority 24/7 support", included: true },
        { text: "Advanced analytics", included: true },
        { text: "Unlimited team members", included: true },
        { text: "Custom integrations", included: true },
      ],
    },
  ];

  const CheckIcon = () => (
    <IoCheckmarkCircleOutline strokeWidth={1} color="white" size={15} />
  );
  const CrossIcon = () => <GiCancel strokeWidth={1} color="white" size={15} />;
  const ArrowIcon = ({ className = "" }) => (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.167 10h11.666M10 4.164l5.833 5.833L10 15.831"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <>
      <section id="after-launch" className=" px-4 py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center">
          <div className="flex items-center gap-2 rounded-full border border-t-blue-700 bg-neutral-800 mb-5 px-5 py-2">
            <span className="size-1.5 rounded-full bg-blue-700"></span>
            <p className="font-primary text-white text-[11px] uppercase tracking-[0.2em]">
              Pay as you go
            </p>
          </div>

          <h2 className="font-secondary font-semibold text-3xl md:text-5xl mb-3 lg:text-[3.4rem] leading-[1.03] tracking-tight text-white text-balance">
            Ongoing Support{" "}
            <span className="font-instrument lowercase tracking-tighter italic text-blue-700">
              Plans
            </span>
          </h2>

          <div className="mt-10 grid w-full max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-4xl border border-neutral-700 p-1.5"
              >
                <div
                  className={`h-full rounded-4xl border ${plan.innerBorderClass} p-6`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`size-4 rounded-sm ${plan.dotClass}`}
                    ></span>
                    <p className="text-sm font-main text-white">{plan.name}</p>
                  </div>

                  <div className="mt-5 flex items-center gap-2">
                    <h3 className="text-4xl font-semibold text-white">
                      {plan.price}
                    </h3>
                    <p className="pt-2 text-xs text-blue-600 font-medium uppercase tracking-wide">
                      /month
                    </p>
                  </div>

                  <p className="mt-4 max-w-[260px] text-xs  text-white">
                    {plan.description}
                  </p>

                  <button
                    className={`mt-6 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white cursor-pointer group ${plan.buttonClass}`}
                  >
                    GET STARTED
                    <ArrowIcon className="group-hover:translate-x-1 transition-all duration-300" />
                  </button>

                  <div className="mt-9 space-y-5">
                    {plan.features.map((feature) => (
                      <div
                        key={feature.text}
                        className="flex items-center gap-2.5"
                      >
                        {feature.included ? <CheckIcon /> : <CrossIcon />}
                        <p className="font-main text-white text-xs leading-relaxed ">
                          {feature.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default AfterLaunch;
