export default function Loading() {
  return (
    <div className="fixed inset-0 bg-default-background flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-4">
        {/* Car Animation */}
        <div className="relative w-80 h-32 overflow-hidden">
          {/* Road */}
          <div className="absolute bottom-0 w-full h-2 bg-secondary-400 rounded">
            {/* Road lines animation */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/30 transform -translate-y-1/2">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
            </div>
          </div>

          {/* Animated road dashes */}
          <div className="absolute bottom-0 w-full h-2 flex items-center">
            <div className="flex space-x-4 animate-dash-move">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="w-6 h-0.5 bg-white/60 rounded"></div>
              ))}
            </div>
          </div>

          {/* Car */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-car-bounce">
            <svg
              width="80"
              height="40"
              viewBox="0 0 100 50"
              className="fill-primary-500"
            >
              {/* Car Body */}
              <rect
                x="10"
                y="25"
                width="60"
                height="15"
                rx="3"
                className="fill-primary-500"
              />
              <rect
                x="20"
                y="15"
                width="40"
                height="15"
                rx="8"
                className="fill-primary-600"
              />

              {/* Windows */}
              <rect
                x="25"
                y="18"
                width="12"
                height="8"
                rx="2"
                className="fill-primary-100"
              />
              <rect
                x="43"
                y="18"
                width="12"
                height="8"
                rx="2"
                className="fill-primary-100"
              />

              {/* Wheels */}
              <circle cx="25" cy="40" r="6" className="fill-secondary-700" />
              <circle cx="55" cy="40" r="6" className="fill-secondary-700" />
              <circle cx="25" cy="40" r="3" className="fill-secondary-300" />
              <circle cx="55" cy="40" r="3" className="fill-secondary-300" />

              {/* Headlights */}
              <circle cx="72" cy="30" r="2" className="fill-warning-300" />
              <circle cx="72" cy="35" r="1.5" className="fill-error-400" />

              {/* Side details */}
              <rect
                x="15"
                y="28"
                width="50"
                height="2"
                rx="1"
                className="fill-primary-400"
              />
            </svg>
          </div>

          {/* Exhaust smoke animation */}
          {/* <div className="absolute bottom-8 left-2 animate-smoke">
            <div className="w-2 h-2 bg-secondary-300 rounded-full opacity-60 animate-ping"></div>
          </div> */}
        </div>

        {/* Loading Text and Spinner */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="animate-spin rounded-full h-6 w-6 border-2 border-primary-200 border-t-primary-500"></div>
            <h2 className="text-xl font-semibold text-secondary-600">
              Getting your ride ready...
            </h2>
          </div>

          {/* Loading dots */}
          {/* <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce animate-delay-100"></div>
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce animate-delay-200"></div>
          </div> */}

          {/* Progress bar */}
          {/* <div className="w-64 h-1 bg-secondary-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full animate-progress"></div>
          </div> */}
        </div>

        {/* Brand text */}
        <p className="text-secondary-400 text-sm font-medium">
          MORENT - Premium Car Rental
        </p>
      </div>
    </div>
  );
}
